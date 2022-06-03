package trainingapp.messaging.bank

uses gw.plugin.messaging.MessageTransport
uses trainingapp.webservice.bank.bankaccountverificationwsc.bankverificationapi.BankVerificationAPI

class BankAccountVerificationTransport implements MessageTransport {

  private var _bankAccountVerificationAPI : BankVerificationAPI

  /**
   * Messages are acknowledged synchronously by ExternalApp.
   */
  @Param("aMessage", "Message object")
  @Param("transformedPayload", "Payload sent by request plugin")
  override function send(aMessage : Message, transformedPayload : String) {
    // Determine ackCode based on first 3 digits in bank account number
    var accNumber = (aMessage.MessageRoot as BankAccount).AccountNumber
    var responseCode = _bankAccountVerificationAPI.verifyAccount(aMessage.SenderRefID, transformedPayload, accNumber)

    // Acknowledge message based on the response code
   processResponseCode(aMessage, responseCode)

    // Print statement is for training purposes only
    var output : String
    output = "\n    *** Stage 4 -- Sending the message *** " +
             "\n    Transport plugin: BankAccountVerificationTransport -- send()" +
             "\n    The Request Plugin transformed the payload" +
             "\n    Sending transformed payload to console:" +
             "\n" + transformedPayload + "\n"

    output += "\n    *** Stage 5 -- Message acknowledgement *** " +
              "\n    Transport plugin: BankAccountVerificationTransport -- send()" +
              "\n    Message acknowledged synchronously" +
              "\n    Verification status is: " + (aMessage.MessageRoot as BankAccount).IsVerified.DisplayName
    print(output)
  }

  override function resume() {
    // Create external web service object and set API properties
    _bankAccountVerificationAPI = new BankVerificationAPI()
    _bankAccountVerificationAPI.Config.Http.Authentication.Basic.Username = "externalappuser"
    _bankAccountVerificationAPI.Config.Http.Authentication.Basic.Password = "gw"
    _bankAccountVerificationAPI.Config.CallTimeout = 30000
  }

  override function shutdown() {
    //## todo: Implement me
  }

  override function suspend() {
    _bankAccountVerificationAPI = null
  }

  override property set DestinationID(destinationID : int) {
    //## todo: Implement me
  }

  // Helper methods

  /**
   * This method processes a message based on its external system synchronous response code.
   */
  @Param("aMessage", "The message instance")
  @Param("responseCode", "Response code from the external system")
  private function processResponseCode(message: Message, responseCode: String) : void {
    // Synchrounous acknowledgment
    switch (responseCode) {
      case "000":
        // Message acknowledged - Invalid
        message.reportAck()
        (message.MessageRoot as BankAccount).IsVerified = VerificationStatus.TC_INVALID
        break
      case "999":
        // Payload format message error
        message.reportError(ErrorCategory.TC_PAYLOAD_FORMAT)
        break
      default:
        // Message acknowledged - Verified
        message.reportAck()
        (message.MessageRoot as BankAccount).IsVerified = VerificationStatus.TC_VERIFIED
        break
    }
  }

}