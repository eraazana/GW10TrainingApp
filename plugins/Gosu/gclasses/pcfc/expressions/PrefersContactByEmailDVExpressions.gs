package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/PrefersContactByEmailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PrefersContactByEmailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/PrefersContactByEmailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PrefersContactByEmailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PrefersContactByEmail_Input) at PrefersContactByEmailDV.pcf: line 17, column 40
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.PrefersContactByEmail = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PrefersContactByEmail_Input) at PrefersContactByEmailDV.pcf: line 17, column 40
    function valueRoot_2 () : java.lang.Object {
      return anABContact
    }
    
    // 'value' attribute on BooleanRadioInput (id=PrefersContactByEmail_Input) at PrefersContactByEmailDV.pcf: line 17, column 40
    function value_0 () : java.lang.Boolean {
      return anABContact.PrefersContactByEmail
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}