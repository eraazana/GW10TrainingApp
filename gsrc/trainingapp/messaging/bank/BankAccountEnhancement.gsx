package trainingapp.messaging.bank

enhancement BankAccountEnhancement : KeyableBean {

  property get AgeOfMessage_Ext(): String {
    return "@@ageOfMessageInSeconds@@"
  }

  property get SenderRefID_Ext(): String {
    return "@@SenderRefID@@"
  }

}
