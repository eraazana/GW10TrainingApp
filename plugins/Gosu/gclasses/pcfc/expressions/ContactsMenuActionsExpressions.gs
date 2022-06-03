package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ContactsMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactsMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ContactsMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactsMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at ContactsMenuActions.pcf: line 8, column 59
    function def_onEnter_0 (def :  pcf.NewContactPickerMenuItemSet) : void {
      def.onEnter(ABContact, null)
    }
    
    // 'def' attribute on MenuItemSetRef at ContactsMenuActions.pcf: line 8, column 59
    function def_refreshVariables_1 (def :  pcf.NewContactPickerMenuItemSet) : void {
      def.refreshVariables(ABContact, null)
    }
    
    
  }
  
  
}