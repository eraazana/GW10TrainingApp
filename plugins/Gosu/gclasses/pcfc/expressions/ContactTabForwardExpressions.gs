package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ContactTabForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactTabForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ContactTabForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactTabForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at ContactTabForward.pcf: line 13, column 46
    function action_1 () : void {
      NoContactPage.go()
    }
    
    // 'action' attribute on ForwardCondition at ContactTabForward.pcf: line 15, column 51
    function action_4 () : void {
      ABContactLG.go(lastViewedContact)
    }
    
    // 'action' attribute on ForwardCondition at ContactTabForward.pcf: line 13, column 46
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NoContactPage.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at ContactTabForward.pcf: line 15, column 51
    function action_dest_5 () : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(lastViewedContact)
    }
    
    // 'condition' attribute on ForwardCondition at ContactTabForward.pcf: line 13, column 46
    function condition_3 () : java.lang.Boolean {
      return lastViewedContact == null
    }
    
    // 'initialValue' attribute on Variable at ContactTabForward.pcf: line 10, column 25
    function initialValue_0 () : ABContact {
      return trainingapp.base.RecentlyViewedContactUtil.lastViewedContact()
    }
    
    override property get CurrentLocation () : pcf.ContactTabForward {
      return super.CurrentLocation as pcf.ContactTabForward
    }
    
    property get lastViewedContact () : ABContact {
      return getVariableValue("lastViewedContact", 0) as ABContact
    }
    
    property set lastViewedContact ($arg :  ABContact) {
      setVariableValue("lastViewedContact", 0, $arg)
    }
    
    
  }
  
  
}