package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Details/PhoneAndAddressesDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PhoneAndAddressesDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Details/PhoneAndAddressesDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PhoneAndAddressesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
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