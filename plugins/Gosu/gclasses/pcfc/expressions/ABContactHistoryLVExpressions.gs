package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactHistoryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactHistoryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ABContactHistoryLV.pcf: line 19, column 24
    function sortBy_0 (currentHistoryEntry :  HistoryEntry) : java.lang.Object {
      return currentHistoryEntry.CreateTime
    }
    
    // 'value' attribute on DateCell (id=EntryDate_Cell) at ABContactHistoryLV.pcf: line 24, column 51
    function sortValue_1 (currentHistoryEntry :  HistoryEntry) : java.lang.Object {
      return currentHistoryEntry.CreateTime
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactHistoryLV.pcf: line 29, column 49
    function sortValue_2 (currentHistoryEntry :  HistoryEntry) : java.lang.Object {
      return currentHistoryEntry.EventType
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ABContactHistoryLV.pcf: line 33, column 52
    function sortValue_3 (currentHistoryEntry :  HistoryEntry) : java.lang.Object {
      return currentHistoryEntry.Description
    }
    
    // 'value' attribute on RowIterator at ABContactHistoryLV.pcf: line 15, column 34
    function value_13 () : HistoryEntry[] {
      return anABContact.HistoryEntries
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABContactHistoryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=EntryDate_Cell) at ABContactHistoryLV.pcf: line 24, column 51
    function valueRoot_5 () : java.lang.Object {
      return currentHistoryEntry
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ABContactHistoryLV.pcf: line 33, column 52
    function value_10 () : java.lang.String {
      return currentHistoryEntry.Description
    }
    
    // 'value' attribute on DateCell (id=EntryDate_Cell) at ABContactHistoryLV.pcf: line 24, column 51
    function value_4 () : java.util.Date {
      return currentHistoryEntry.CreateTime
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactHistoryLV.pcf: line 29, column 49
    function value_7 () : typekey.HistoryEventType {
      return currentHistoryEntry.EventType
    }
    
    property get currentHistoryEntry () : HistoryEntry {
      return getIteratedValue(1) as HistoryEntry
    }
    
    
  }
  
  
}