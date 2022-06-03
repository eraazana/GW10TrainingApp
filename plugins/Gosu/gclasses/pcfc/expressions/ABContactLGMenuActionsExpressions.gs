package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactLGMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactLGMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactLGMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactLGMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ABContactMenuActions_NewNote) at ABContactLGMenuActions.pcf: line 18, column 63
    function action_2 () : void {
      ContactNoteWorksheet.goInWorkspace(anABContact, true)
    }
    
    // 'action' attribute on MenuItem (id=ResetPrimaryPhoneValue) at ABContactLGMenuActions.pcf: line 23, column 48
    function action_5 () : void {
      ResetPrimaryPhoneWorksheet.goInWorkspace(anABContact as ABPerson)
    }
    
    // 'action' attribute on MenuItem (id=ABContactMenuActions_NewNote) at ABContactLGMenuActions.pcf: line 18, column 63
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ContactNoteWorksheet.createDestination(anABContact, true)
    }
    
    // 'action' attribute on MenuItem (id=ResetPrimaryPhoneValue) at ABContactLGMenuActions.pcf: line 23, column 48
    function action_dest_6 () : pcf.api.Destination {
      return pcf.ResetPrimaryPhoneWorksheet.createDestination(anABContact as ABPerson)
    }
    
    // 'def' attribute on MenuItemSetRef at ABContactLGMenuActions.pcf: line 11, column 59
    function def_onEnter_0 (def :  pcf.NewContactPickerMenuItemSet) : void {
      def.onEnter(ABContact, null)
    }
    
    // 'def' attribute on MenuItemSetRef at ABContactLGMenuActions.pcf: line 11, column 59
    function def_refreshVariables_1 (def :  pcf.NewContactPickerMenuItemSet) : void {
      def.refreshVariables(ABContact, null)
    }
    
    // 'visible' attribute on MenuItem (id=ResetPrimaryPhoneValue) at ABContactLGMenuActions.pcf: line 23, column 48
    function visible_4 () : java.lang.Boolean {
      return anABContact typeis ABPerson
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}