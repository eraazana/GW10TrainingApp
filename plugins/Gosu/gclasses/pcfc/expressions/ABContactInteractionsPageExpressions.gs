package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactInteractionsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactInteractionsPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactInteractionsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactInteractionsPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact) : int {
      return 0
    }
    
    // Page (id=ABContactInteractionsPage) at ABContactInteractionsPage.pcf: line 8, column 67
    static function parent_0 (anABContact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABContact)
    }
    
    override property get CurrentLocation () : pcf.ABContactInteractionsPage {
      return super.CurrentLocation as pcf.ABContactInteractionsPage
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}