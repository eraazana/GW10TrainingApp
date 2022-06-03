package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.Relop
uses trainingapp.base.SampleDataUtil
uses trainingapp.demo.gosu.MiscellaneousExamples
@javax.annotation.Generated("config/web/pcf/training/integration/MessageHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MessageHistoryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/MessageHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MessageHistoryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at MessageHistoryLV.pcf: line 33, column 55
    function valueRoot_13 () : java.lang.Object {
      return currentMessageHistory
    }
    
    // 'value' attribute on TextCell (id=ID_Cell) at MessageHistoryLV.pcf: line 27, column 56
    function value_10 () : java.lang.String {
      return currentMessageHistory.ID.toString()
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at MessageHistoryLV.pcf: line 33, column 55
    function value_12 () : java.util.Date {
      return currentMessageHistory.CreationTime
    }
    
    // 'value' attribute on TextCell (id=TriggeringEntity_Cell) at MessageHistoryLV.pcf: line 38, column 68
    function value_15 () : java.lang.String {
      return getObjectNameFromMessage(currentMessageHistory)
    }
    
    // 'value' attribute on TextCell (id=EventName_Cell) at MessageHistoryLV.pcf: line 42, column 52
    function value_17 () : java.lang.String {
      return currentMessageHistory.EventName
    }
    
    // 'value' attribute on TextCell (id=Destination_Cell) at MessageHistoryLV.pcf: line 47, column 42
    function value_20 () : java.lang.Integer {
      return currentMessageHistory.DestinationID
    }
    
    // 'value' attribute on TextCell (id=SenderRefID_Cell) at MessageHistoryLV.pcf: line 51, column 54
    function value_23 () : java.lang.String {
      return currentMessageHistory.SenderRefID
    }
    
    // 'value' attribute on TypeKeyCell (id=ErrorDescription_Cell) at MessageHistoryLV.pcf: line 56, column 46
    function value_26 () : typekey.ErrorCategory {
      return currentMessageHistory.ErrorCategory
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MessageHistoryLV.pcf: line 61, column 79
    function value_29 () : java.lang.String {
      return getStatusStringFromStatusInt(currentMessageHistory.Status)
    }
    
    // 'value' attribute on TextCell (id=DuplicateCount_Cell) at MessageHistoryLV.pcf: line 67, column 42
    function value_31 () : java.lang.Integer {
      return currentMessageHistory.DuplicateCount
    }
    
    // 'visible' attribute on TextCell (id=DuplicateCount_Cell) at MessageHistoryLV.pcf: line 67, column 42
    function visible_33 () : java.lang.Boolean {
      return displayDupCountColumn()
    }
    
    property get currentMessageHistory () : MessageHistory {
      return getIteratedValue(1) as MessageHistory
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/integration/MessageHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MessageHistoryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at MessageHistoryLV.pcf: line 19, column 24
    function sortBy_0 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.CreationTime
    }
    
    // 'sortBy' attribute on IteratorSort at MessageHistoryLV.pcf: line 22, column 24
    function sortBy_1 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.Status
    }
    
    // 'value' attribute on TextCell (id=ID_Cell) at MessageHistoryLV.pcf: line 27, column 56
    function sortValue_2 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.ID.toString()
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at MessageHistoryLV.pcf: line 33, column 55
    function sortValue_3 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.CreationTime
    }
    
    // 'value' attribute on TextCell (id=EventName_Cell) at MessageHistoryLV.pcf: line 42, column 52
    function sortValue_4 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.EventName
    }
    
    // 'value' attribute on TextCell (id=Destination_Cell) at MessageHistoryLV.pcf: line 47, column 42
    function sortValue_5 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.DestinationID
    }
    
    // 'value' attribute on TextCell (id=SenderRefID_Cell) at MessageHistoryLV.pcf: line 51, column 54
    function sortValue_6 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.SenderRefID
    }
    
    // 'value' attribute on TypeKeyCell (id=ErrorDescription_Cell) at MessageHistoryLV.pcf: line 56, column 46
    function sortValue_7 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.ErrorCategory
    }
    
    // 'value' attribute on TextCell (id=DuplicateCount_Cell) at MessageHistoryLV.pcf: line 67, column 42
    function sortValue_8 (currentMessageHistory :  MessageHistory) : java.lang.Object {
      return currentMessageHistory.DuplicateCount
    }
    
    // 'value' attribute on RowIterator at MessageHistoryLV.pcf: line 16, column 74
    function value_35 () : gw.api.database.IQueryBeanResult<MessageHistory> {
      return allMessages()
    }
    
    // 'visible' attribute on TextCell (id=DuplicateCount_Cell) at MessageHistoryLV.pcf: line 67, column 42
    function visible_9 () : java.lang.Boolean {
      return displayDupCountColumn()
    }
    
    
    function allMessages() : gw.api.database.IQueryBeanResult<entity.MessageHistory> {
      // delete orphan messages in sample data
      SampleDataUtil.deleteOrphanMessages()
      MiscellaneousExamples.waitForXSeconds(1, false)
      var queryObj = gw.api.database.Query.make(MessageHistory)
      return queryObj.select()
    }
    
    function getObjectNameFromMessage (aMessage : MessageHistory) : String {
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
          var returnString = "Student-Defined Destination (" + (ID as java.lang.String).trim() + ")"
          return returnString
      }
    }
      
    function getStatusStringFromStatusInt(Status : int) : String {
      switch (Status) {
        case 10:
          return "Acknowledged (10)"
        case 11:
          return "Error cleared (11)"
        case 12:
          return "Error retried (12)"
        case 13:
          return "Skipped (13)"
        default:
          return "Unknown" 
      }
    }
    
    function displayDupCountColumn() : boolean {
      var queryObj = gw.api.database.Query.make(MessageHistory)
      queryObj.compare(MessageHistory#DuplicateCount, Relop.GreaterThan, 0)
          var result = queryObj.select().Count
          if (result > 0) {
            // found at least one message with a duplicate count, so immediately return true
            return true
          } else {
            // no messages with a duplicate count were found, return false
            return false
          }
        }
    // TODO: CurrDev TrainingApp 8.0.2. Ver 7
    
    
  }
  
  
}