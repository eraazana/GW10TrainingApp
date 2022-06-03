package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on InfoBarElement (id=Name) at ABContactInfoBar.pcf: line 29, column 40
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Training.TypeWithColon", anABContact.Subtype.DisplayName)
    }
    
    // 'value' attribute on InfoBarElement (id=Name) at ABContactInfoBar.pcf: line 29, column 40
    function value_5 () : java.lang.Object {
      return anABContact.DisplayName
    }
    
    // 'visible' attribute on InfoBarElement (id=FlagIcon) at ABContactInfoBar.pcf: line 13, column 40
    function visible_0 () : java.lang.Boolean {
      return anABContact.IsFlagged
    }
    
    // 'visible' attribute on InfoBarElement (id=ABPersonIcon) at ABContactInfoBar.pcf: line 17, column 46
    function visible_1 () : java.lang.Boolean {
      return anABContact typeis ABPerson
    }
    
    // 'visible' attribute on InfoBarElement (id=ABCompanyIcon) at ABContactInfoBar.pcf: line 21, column 47
    function visible_2 () : java.lang.Boolean {
      return anABContact typeis ABCompany
    }
    
    // 'visible' attribute on InfoBarElement (id=ABPlaceIcon) at ABContactInfoBar.pcf: line 25, column 45
    function visible_3 () : java.lang.Boolean {
      return anABContact typeis ABPlace
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}