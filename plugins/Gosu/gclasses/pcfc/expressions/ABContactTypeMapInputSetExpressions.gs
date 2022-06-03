package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactTypeMapInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactTypeMapInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactTypeMapInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactTypeMapInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 14, column 47
    function visible_0 () : java.lang.Boolean {
      return (ABContact typeis ABCompany)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 17, column 46
    function visible_1 () : java.lang.Boolean {
      return (ABContact typeis ABPerson)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 44, column 54
    function visible_10 () : java.lang.Boolean {
      return (ABContact typeis ABAutoRepairShop)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 47, column 54
    function visible_11 () : java.lang.Boolean {
      return (ABContact typeis ABAutoTowingAgcy)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 50, column 47
    function visible_12 () : java.lang.Boolean {
      return (ABContact typeis ABLawFirm)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 53, column 54
    function visible_13 () : java.lang.Boolean {
      return (ABContact typeis ABMedicalCareOrg)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 56, column 48
    function visible_14 () : java.lang.Boolean {
      return (ABContact typeis ABAttorney)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 59, column 46
    function visible_15 () : java.lang.Boolean {
      return (ABContact typeis ABDoctor)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 20, column 45
    function visible_2 () : java.lang.Boolean {
      return (ABContact typeis ABPlace)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 23, column 51
    function visible_3 () : java.lang.Boolean {
      return (ABContact typeis ABAdjudicator)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 26, column 50
    function visible_4 () : java.lang.Boolean {
      return (ABContact typeis ABLegalVenue)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 29, column 53
    function visible_5 () : java.lang.Boolean {
      return (ABContact typeis ABCompanyVendor)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 32, column 52
    function visible_6 () : java.lang.Boolean {
      return (ABContact typeis ABPersonVendor)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 35, column 53
    function visible_7 () : java.lang.Boolean {
      return (ABContact typeis ABPolicyCompany)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 38, column 52
    function visible_8 () : java.lang.Boolean {
      return (ABContact typeis ABPolicyPerson)
    }
    
    // 'visible' attribute on Label at ABContactTypeMapInputSet.pcf: line 41, column 51
    function visible_9 () : java.lang.Boolean {
      return (ABContact typeis ABUserContact)
    }
    
    property get ABContact () : ABContact {
      return getRequireValue("ABContact", 0) as ABContact
    }
    
    property set ABContact ($arg :  ABContact) {
      setRequireValue("ABContact", 0, $arg)
    }
    
    
  }
  
  
}