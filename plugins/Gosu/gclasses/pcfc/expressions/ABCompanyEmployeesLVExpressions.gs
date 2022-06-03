package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABCompany/ABCompanyEmployeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyEmployeesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABCompany/ABCompanyEmployeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyEmployeesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ABCompanyEmployeesLV.pcf: line 19, column 24
    function sortBy_0 (currentEmployee :  ABPerson) : java.lang.Object {
      return currentEmployee.LastName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ABCompanyEmployeesLV.pcf: line 25, column 48
    function sortValue_1 (currentEmployee :  ABPerson) : java.lang.Object {
      return currentEmployee.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Occupation_Cell) at ABCompanyEmployeesLV.pcf: line 29, column 47
    function sortValue_2 (currentEmployee :  ABPerson) : java.lang.Object {
      return currentEmployee.Occupation
    }
    
    // 'value' attribute on TextCell (id=emailAddress_Cell) at ABCompanyEmployeesLV.pcf: line 33, column 50
    function sortValue_3 (currentEmployee :  ABPerson) : java.lang.Object {
      return currentEmployee.EmailAddress1
    }
    
    // 'value' attribute on RowIterator at ABCompanyEmployeesLV.pcf: line 16, column 30
    function value_14 () : ABPerson[] {
      return (anABContact as ABCompany).Employees
    }
    
    // 'visible' attribute on RowIterator at ABCompanyEmployeesLV.pcf: line 16, column 30
    function visible_4 () : java.lang.Boolean {
      return anABContact typeis ABCompany
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/ABCompany/ABCompanyEmployeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABCompanyEmployeesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ABCompanyEmployeesLV.pcf: line 25, column 48
    function valueRoot_6 () : java.lang.Object {
      return currentEmployee
    }
    
    // 'value' attribute on TextCell (id=emailAddress_Cell) at ABCompanyEmployeesLV.pcf: line 33, column 50
    function value_11 () : java.lang.String {
      return currentEmployee.EmailAddress1
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ABCompanyEmployeesLV.pcf: line 25, column 48
    function value_5 () : java.lang.String {
      return currentEmployee.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Occupation_Cell) at ABCompanyEmployeesLV.pcf: line 29, column 47
    function value_8 () : java.lang.String {
      return currentEmployee.Occupation
    }
    
    property get currentEmployee () : ABPerson {
      return getIteratedValue(1) as ABPerson
    }
    
    
  }
  
  
}