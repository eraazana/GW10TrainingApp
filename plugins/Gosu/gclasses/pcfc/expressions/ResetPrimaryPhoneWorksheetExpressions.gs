package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ResetPrimaryPhoneWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ResetPrimaryPhoneWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ResetPrimaryPhoneWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ResetPrimaryPhoneWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABPerson :  ABPerson) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Worksheet (id=ResetPrimaryPhoneWorksheet) at ResetPrimaryPhoneWorksheet.pcf: line 11, column 89
    function beforeCommit_17 (pickedValue :  java.lang.Object) : void {
      anABPerson.NewPrimaryPhone = EnteredPhoneNumber
    }
    
    // 'value' attribute on TextInput (id=NewPrimaryPhoneNumber_Input) at ResetPrimaryPhoneWorksheet.pcf: line 50, column 43
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      EnteredPhoneNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // EditButtons at ResetPrimaryPhoneWorksheet.pcf: line 25, column 25
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'location' attribute on Scope at ResetPrimaryPhoneWorksheet.pcf: line 15, column 43
    function location_0 () : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABPerson)
    }
    
    // 'tabLabel' attribute on Worksheet (id=ResetPrimaryPhoneWorksheet) at ResetPrimaryPhoneWorksheet.pcf: line 11, column 89
    function tabLabel_19 () : java.lang.String {
      return DisplayKey.get("Training.ResetPrimaryPhone", anABPerson.FullName)
    }
    
    // 'title' attribute on Worksheet (id=ResetPrimaryPhoneWorksheet) at ResetPrimaryPhoneWorksheet.pcf: line 11, column 89
    static function title_18 (anABPerson :  ABPerson) : java.lang.Object {
      return DisplayKey.get("Training.ResetPrimaryPhone", anABPerson.FullName)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ResetPrimaryPhoneWorksheet.pcf: line 33, column 53
    function valueRoot_3 () : java.lang.Object {
      return anABPerson
    }
    
    // 'value' attribute on TextInput (id=BusinessPhone_Input) at ResetPrimaryPhoneWorksheet.pcf: line 45, column 45
    function value_11 () : java.lang.String {
      return anABPerson.WorkPhone
    }
    
    // 'value' attribute on TextInput (id=NewPrimaryPhoneNumber_Input) at ResetPrimaryPhoneWorksheet.pcf: line 50, column 43
    function value_14 () : java.lang.String {
      return EnteredPhoneNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ResetPrimaryPhoneWorksheet.pcf: line 33, column 53
    function value_2 () : typekey.PrimaryPhoneType {
      return anABPerson.PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=HomePhone_Input) at ResetPrimaryPhoneWorksheet.pcf: line 37, column 45
    function value_5 () : java.lang.String {
      return anABPerson.HomePhone
    }
    
    // 'value' attribute on TextInput (id=CellPhone_Input) at ResetPrimaryPhoneWorksheet.pcf: line 41, column 45
    function value_8 () : java.lang.String {
      return anABPerson.CellPhone
    }
    
    override property get CurrentLocation () : pcf.ResetPrimaryPhoneWorksheet {
      return super.CurrentLocation as pcf.ResetPrimaryPhoneWorksheet
    }
    
    property get EnteredPhoneNumber () : String {
      return getVariableValue("EnteredPhoneNumber", 0) as String
    }
    
    property set EnteredPhoneNumber ($arg :  String) {
      setVariableValue("EnteredPhoneNumber", 0, $arg)
    }
    
    property get anABPerson () : ABPerson {
      return getVariableValue("anABPerson", 0) as ABPerson
    }
    
    property set anABPerson ($arg :  ABPerson) {
      setVariableValue("anABPerson", 0, $arg)
    }
    
    
  }
  
  
}