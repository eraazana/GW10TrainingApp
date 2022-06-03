package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/NoContactPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NoContactPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/NoContactPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NoContactPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'parent' attribute on Page (id=NoContactPage) at NoContactPage.pcf: line 8, column 65
    static function parent_0 () : pcf.api.Destination {
      return pcf.ContactTabForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NoContactPage {
      return super.CurrentLocation as pcf.NoContactPage
    }
    
    
  }
  
  
}