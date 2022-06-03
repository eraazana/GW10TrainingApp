package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactAnalysisPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactAnalysisPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactAnalysisPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactAnalysisPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact) : int {
      return 0
    }
    
    // Page (id=ABContactAnalysisPage) at ABContactAnalysisPage.pcf: line 8, column 59
    static function parent_0 (anABContact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABContact)
    }
    
    override property get CurrentLocation () : pcf.ABContactAnalysisPage {
      return super.CurrentLocation as pcf.ABContactAnalysisPage
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}