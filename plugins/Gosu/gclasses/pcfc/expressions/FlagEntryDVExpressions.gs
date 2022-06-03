package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FlagEntryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FlagEntryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 9, column 49
    function action_13 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 12, column 49
    function action_15 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 9, column 49
    function action_dest_14 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 12, column 49
    function action_dest_16 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'value' attribute on TextAreaInput (id=Resolution_Input) at FlagEntryDV.pcf: line 28, column 39
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      aFlagEntry.Resolution = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Reason_Input) at FlagEntryDV.pcf: line 21, column 38
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      aFlagEntry.Reason = (__VALUE_TO_SET as FlagEntryReason)
    }
    
    // 'editable' attribute on DetailViewPanel (id=FlagEntryDV) at FlagEntryDV.pcf: line 7, column 22
    function editable_28 () : java.lang.Boolean {
      return aFlagEntry.IsEditable
    }
    
    // 'onChange' attribute on PostOnChange at FlagEntryDV.pcf: line 30, column 58
    function onChange_8 () : void {
      aFlagEntry.setFieldsOnResolution()
    }
    
    // 'valueRange' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 6, column 85
    function valueRange_19 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on DateInput (id=DateFlagged_Input) at FlagEntryDV.pcf: line 15, column 38
    function valueRoot_1 () : java.lang.Object {
      return aFlagEntry
    }
    
    // 'value' attribute on DateInput (id=DateFlagged_Input) at FlagEntryDV.pcf: line 15, column 38
    function value_0 () : java.util.Date {
      return aFlagEntry.FlagDate
    }
    
    // 'value' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 6, column 85
    function value_17 () : entity.User {
      return aFlagEntry.UnflagUser
    }
    
    // 'value' attribute on DateInput (id=UnflagDate_Input) at FlagEntryDV.pcf: line 39, column 40
    function value_25 () : java.util.Date {
      return aFlagEntry.UnflagDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Reason_Input) at FlagEntryDV.pcf: line 21, column 38
    function value_3 () : FlagEntryReason {
      return aFlagEntry.Reason
    }
    
    // 'value' attribute on TextAreaInput (id=Resolution_Input) at FlagEntryDV.pcf: line 28, column 39
    function value_9 () : java.lang.String {
      return aFlagEntry.Resolution
    }
    
    // 'valueRange' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_20 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=UnflagUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_21 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=Reason_Input) at FlagEntryDV.pcf: line 21, column 38
    function verifyValueType_7 () : void {
      var __valueTypeArg : FlagEntryReason
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get aFlagEntry () : FlagEntry {
      return getRequireValue("aFlagEntry", 0) as FlagEntry
    }
    
    property set aFlagEntry ($arg :  FlagEntry) {
      setRequireValue("aFlagEntry", 0, $arg)
    }
    
    
  }
  
  
}