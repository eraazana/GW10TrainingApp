package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/LegalCase/LegalCaseLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LegalCaseLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/LegalCase/LegalCaseLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LegalCaseLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at LegalCaseLV.pcf: line 20, column 46
    function valueRoot_5 () : java.lang.Object {
      return currentLegalCase
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at LegalCaseLV.pcf: line 29, column 46
    function value_10 () : typekey.LegalCaseType {
      return currentLegalCase.CaseType
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at LegalCaseLV.pcf: line 34, column 48
    function value_13 () : typekey.LegalCaseStatus {
      return currentLegalCase.Status
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at LegalCaseLV.pcf: line 20, column 46
    function value_4 () : java.util.Date {
      return currentLegalCase.FileDate
    }
    
    // 'value' attribute on TextCell (id=Plaintiff_Cell) at LegalCaseLV.pcf: line 24, column 47
    function value_7 () : java.lang.String {
      return currentLegalCase.Plaintiff
    }
    
    property get currentLegalCase () : LegalCase {
      return getIteratedValue(1) as LegalCase
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/ABContact/LegalCase/LegalCaseLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LegalCaseLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at LegalCaseLV.pcf: line 20, column 46
    function sortValue_0 (currentLegalCase :  LegalCase) : java.lang.Object {
      return currentLegalCase.FileDate
    }
    
    // 'value' attribute on TextCell (id=Plaintiff_Cell) at LegalCaseLV.pcf: line 24, column 47
    function sortValue_1 (currentLegalCase :  LegalCase) : java.lang.Object {
      return currentLegalCase.Plaintiff
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at LegalCaseLV.pcf: line 29, column 46
    function sortValue_2 (currentLegalCase :  LegalCase) : java.lang.Object {
      return currentLegalCase.CaseType
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at LegalCaseLV.pcf: line 34, column 48
    function sortValue_3 (currentLegalCase :  LegalCase) : java.lang.Object {
      return currentLegalCase.Status
    }
    
    // 'value' attribute on RowIterator at LegalCaseLV.pcf: line 15, column 31
    function value_16 () : LegalCase[] {
      return anABContact.LegalCases
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}