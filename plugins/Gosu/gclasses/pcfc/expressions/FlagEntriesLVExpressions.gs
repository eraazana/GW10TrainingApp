package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntriesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FlagEntriesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntriesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FlagEntriesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at FlagEntriesLV.pcf: line 19, column 24
    function sortBy_0 (currentFlagEntry :  FlagEntry) : java.lang.Object {
      return currentFlagEntry.FlagDate
    }
    
    // 'value' attribute on DateCell (id=FlagDate_Cell) at FlagEntriesLV.pcf: line 36, column 46
    function sortValue_1 (currentFlagEntry :  FlagEntry) : java.lang.Object {
      return currentFlagEntry.FlagDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Reason_Cell) at FlagEntriesLV.pcf: line 42, column 48
    function sortValue_2 (currentFlagEntry :  FlagEntry) : java.lang.Object {
      return currentFlagEntry.Reason
    }
    
    // 'value' attribute on DateCell (id=UnflagDate_Cell) at FlagEntriesLV.pcf: line 46, column 48
    function sortValue_3 (currentFlagEntry :  FlagEntry) : java.lang.Object {
      return currentFlagEntry.UnflagDate
    }
    
    // 'value' attribute on RowIterator at FlagEntriesLV.pcf: line 15, column 31
    function value_20 () : FlagEntry[] {
      return anABContact.FlagEntries
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
    /* This function returns the label to display on button for FlagEntriesLV.
    */
    function popupButtonText(aFlagEntry : FlagEntry) : String {
      var buttonText = DisplayKey.get("Training.View")
      if (aFlagEntry.IsEditable) {
        buttonText = DisplayKey.get("Training.ViewEdit")
      }
      return buttonText
    }
        
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntriesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FlagEntriesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=ViewButton_Cell) at FlagEntriesLV.pcf: line 32, column 54
    function action_7 () : void {
      FlagEntryPopup.push(currentFlagEntry)
    }
    
    // 'action' attribute on ButtonCell (id=ViewButton_Cell) at FlagEntriesLV.pcf: line 32, column 54
    function action_dest_8 () : pcf.api.Destination {
      return pcf.FlagEntryPopup.createDestination(currentFlagEntry)
    }
    
    // 'value' attribute on BooleanRadioCell (id=OpenEntry_Cell) at FlagEntriesLV.pcf: line 25, column 44
    function valueRoot_5 () : java.lang.Object {
      return currentFlagEntry
    }
    
    // 'value' attribute on DateCell (id=FlagDate_Cell) at FlagEntriesLV.pcf: line 36, column 46
    function value_11 () : java.util.Date {
      return currentFlagEntry.FlagDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Reason_Cell) at FlagEntriesLV.pcf: line 42, column 48
    function value_14 () : typekey.FlagEntryReason {
      return currentFlagEntry.Reason
    }
    
    // 'value' attribute on DateCell (id=UnflagDate_Cell) at FlagEntriesLV.pcf: line 46, column 48
    function value_17 () : java.util.Date {
      return currentFlagEntry.UnflagDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=OpenEntry_Cell) at FlagEntriesLV.pcf: line 25, column 44
    function value_4 () : java.lang.Boolean {
      return currentFlagEntry.IsOpen
    }
    
    // 'value' attribute on ButtonCell (id=ViewButton_Cell) at FlagEntriesLV.pcf: line 32, column 54
    function value_9 () : java.lang.String {
      return popupButtonText(currentFlagEntry)
    }
    
    property get currentFlagEntry () : FlagEntry {
      return getIteratedValue(1) as FlagEntry
    }
    
    
  }
  
  
}