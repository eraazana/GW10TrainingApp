package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ABContactDetailScreen_DeleteButton) at ABContactDetailScreen.pcf: line 29, column 53
    function action_3 () : void {
      gw.api.web.contact.ABContactUtil.deleteContact(contact, CurrentLocation)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function def_onEnter_11 (def :  pcf.ContactBasicsDV_default) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function def_onEnter_5 (def :  pcf.ContactBasicsDV_ABCompany) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function def_onEnter_7 (def :  pcf.ContactBasicsDV_ABPerson) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function def_onEnter_9 (def :  pcf.ContactBasicsDV_ABPlace) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function def_refreshVariables_10 (def :  pcf.ContactBasicsDV_ABPlace) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function def_refreshVariables_12 (def :  pcf.ContactBasicsDV_default) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function def_refreshVariables_6 (def :  pcf.ContactBasicsDV_ABCompany) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function def_refreshVariables_8 (def :  pcf.ContactBasicsDV_ABPerson) : void {
      def.refreshVariables(contact)
    }
    
    // EditButtons at ABContactDetailScreen.pcf: line 19, column 49
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on PanelRef at ABContactDetailScreen.pcf: line 15, column 30
    function mode_13 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'pickValue' attribute on EditButtons at ABContactDetailScreen.pcf: line 19, column 49
    function pickValue_0 () : ABContact {
      return canPick ? contact : null
    }
    
    // 'visible' attribute on ToolbarButton (id=ABContactDetailScreen_DeleteButton) at ABContactDetailScreen.pcf: line 29, column 53
    function visible_2 () : java.lang.Boolean {
      return perm.ABContact.delete(contact)
    }
    
    // 'visible' attribute on Toolbar (id=ContactBasicsDV_tb) at ABContactDetailScreen.pcf: line 17, column 40
    function visible_4 () : java.lang.Boolean {
      return !contact.isRetired()
    }
    
    property get canPick () : Boolean {
      return getRequireValue("canPick", 0) as Boolean
    }
    
    property set canPick ($arg :  Boolean) {
      setRequireValue("canPick", 0, $arg)
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}