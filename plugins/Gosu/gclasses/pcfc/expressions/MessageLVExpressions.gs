package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses trainingapp.base.SampleDataUtil
uses trainingapp.demo.gosu.MiscellaneousExamples
@javax.annotation.Generated("config/web/pcf/training/integration/MessageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MessageLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/MessageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MessageLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at MessageLV.pcf: line 35, column 48
    function valueRoot_14 () : java.lang.Object {
      return currentMessage
    }
    
    // 'value' attribute on TextCell (id=ID_Cell) at MessageLV.pcf: line 29, column 49
    function value_11 () : java.lang.String {
      return currentMessage.ID.toString()
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at MessageLV.pcf: line 35, column 48
    function value_13 () : java.util.Date {
      return currentMessage.CreationTime
    }
    
    // 'value' attribute on TextCell (id=TriggeringEntity_Cell) at MessageLV.pcf: line 40, column 61
    function value_16 () : java.lang.String {
      return getObjectNameFromMessage(currentMessage)
    }
    
    // 'value' attribute on TextCell (id=EventName_Cell) at MessageLV.pcf: line 44, column 45
    function value_18 () : java.lang.String {
      return currentMessage.EventName
    }
    
    // 'value' attribute on TextCell (id=Destination_Cell) at MessageLV.pcf: line 49, column 42
    function value_21 () : java.lang.Integer {
      return currentMessage.DestinationID
    }
    
    // 'value' attribute on TextCell (id=SenderRefID_Cell) at MessageLV.pcf: line 53, column 47
    function value_24 () : java.lang.String {
      return currentMessage.SenderRefID
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MessageLV.pcf: line 58, column 72
    function value_27 () : java.lang.String {
      return getStatusStringFromStatusInt(currentMessage.Status)
    }
    
    // 'value' attribute on TypeKeyCell (id=ErrorDescription_Cell) at MessageLV.pcf: line 63, column 46
    function value_29 () : typekey.ErrorCategory {
      return currentMessage.ErrorCategory
    }
    
    // 'value' attribute on TextCell (id=RetryCount_Cell) at MessageLV.pcf: line 69, column 42
    function value_32 () : java.lang.Integer {
      return currentMessage.RetryCount
    }
    
    // 'value' attribute on DateCell (id=RetryTime_Cell) at MessageLV.pcf: line 76, column 47
    function value_35 () : java.util.Date {
      return currentMessage.RetryTime
    }
    
    // 'visible' attribute on DateCell (id=RetryTime_Cell) at MessageLV.pcf: line 76, column 47
    function visible_37 () : java.lang.Boolean {
      return displayRetryTimeColumn()
    }
    
    property get currentMessage () : Message {
      return getIteratedValue(1) as Message
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/integration/MessageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MessageLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at MessageLV.pcf: line 21, column 24
    function sortBy_0 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.CreationTime
    }
    
    // 'sortBy' attribute on IteratorSort at MessageLV.pcf: line 24, column 24
    function sortBy_1 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.Status
    }
    
    // 'value' attribute on TextCell (id=ID_Cell) at MessageLV.pcf: line 29, column 49
    function sortValue_2 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.ID.toString()
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at MessageLV.pcf: line 35, column 48
    function sortValue_3 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.CreationTime
    }
    
    // 'value' attribute on TextCell (id=EventName_Cell) at MessageLV.pcf: line 44, column 45
    function sortValue_4 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.EventName
    }
    
    // 'value' attribute on TextCell (id=Destination_Cell) at MessageLV.pcf: line 49, column 42
    function sortValue_5 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.DestinationID
    }
    
    // 'value' attribute on TextCell (id=SenderRefID_Cell) at MessageLV.pcf: line 53, column 47
    function sortValue_6 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.SenderRefID
    }
    
    // 'value' attribute on TypeKeyCell (id=ErrorDescription_Cell) at MessageLV.pcf: line 63, column 46
    function sortValue_7 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.ErrorCategory
    }
    
    // 'value' attribute on TextCell (id=RetryCount_Cell) at MessageLV.pcf: line 69, column 42
    function sortValue_8 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.RetryCount
    }
    
    // 'value' attribute on DateCell (id=RetryTime_Cell) at MessageLV.pcf: line 76, column 47
    function sortValue_9 (currentMessage :  Message) : java.lang.Object {
      return currentMessage.RetryTime
    }
    
    // 'value' attribute on RowIterator (id=MessageIterator) at MessageLV.pcf: line 17, column 67
    function value_39 () : gw.api.database.IQueryBeanResult<Message> {
      return allMessages()
    }
    
    // 'visible' attribute on DateCell (id=RetryTime_Cell) at MessageLV.pcf: line 76, column 47
    function visible_10 () : java.lang.Boolean {
      return displayRetryTimeColumn()
    }
    
    
    
    function allMessages() : gw.api.database.IQueryBeanResult<entity.Message> {
      SampleDataUtil.deleteOrphanMessages()
      MiscellaneousExamples.waitForXSeconds(1, false)
      var queryObj = gw.api.database.Query.make(Message)
      return queryObj.select()
    }
    
    function getObjectNameFromMessage (aMessage : Message) : String {
        var typeString = aMessage.MessageRoot.IntrinsicType.toString()
        // In this case, intrinsic type starts with "entity.". The next line strips this off.
        typeString = (gw.api.util.StringUtil.substring(typeString,7,typeString.length))  
        var returnString = typeString + "(" + aMessage.MessageRoot.ID + ")"
        return returnString
    }
    
    function getDestinationNameFromID(ID : int) : String {
      switch (ID) {
        case 80:
          return "ABContact AutoSync Broadcast (80)"
        case 65:
          return "email (65)"
        case 13:
          return "Bank Account Verification (13)"
        case 14:
          return "Vendor Recommendation (14)"
        case 15:
          return "Legal Case Report Request (15)"
        case 20:
          return "Safe Ordering Demo (20)"
        case 21:
          return "Message Generator (21)"
        default:
          var returnString = "Student-Defined Destination (" + (ID as java.lang.String) + ")"
          return returnString
      }
    }
      
    function getStatusStringFromStatusInt(Status : int) : String {
      // The strings used for the statuses below come from the Data Dictionary entry for the
      // Message entity - specifically the description of the Status field
      switch (Status) {
        case 1:
          return "Pending send (1)"
        case 2:
          return "Pending acknowledged (2)"
        case 4:
          return "Retryable error (4)"
        default:
          return "Unknown"
      }
    }
    
    function displayRetryTimeColumn() : boolean {
      var queryObj = gw.api.database.Query.make(Message)
      var resultSet = queryObj.select()
      for (currentMessage in resultSet) {
        if (currentMessage.RetryTime != null) {
          // found at least one message with a retry time, so
          // immediately return true
          return true
        }
      }
      // no messages with a retry time were found, return false
      return false
    }
    
    // TODO: CurrDev TrainingApp 8.0.2. Ver 7
    
    
  }
  
  
}