package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonSubtypeInfoInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonSubtypeInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}