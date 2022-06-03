package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VendorEvaluationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VendorEvaluationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Score_Cell) at VendorEvaluationsLV.pcf: line 38, column 28
    function action_13 () : void {
      VendorEvaluationPopup.push(currentVendorEvaluation, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on DateCell (id=EvaluationDate_Cell) at VendorEvaluationsLV.pcf: line 26, column 59
    function action_3 () : void {
      VendorEvaluationPopup.push(currentVendorEvaluation, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Evaluator_Cell) at VendorEvaluationsLV.pcf: line 31, column 54
    function action_8 () : void {
      VendorEvaluationPopup.push(currentVendorEvaluation, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Score_Cell) at VendorEvaluationsLV.pcf: line 38, column 28
    function action_dest_14 () : pcf.api.Destination {
      return pcf.VendorEvaluationPopup.createDestination(currentVendorEvaluation, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on DateCell (id=EvaluationDate_Cell) at VendorEvaluationsLV.pcf: line 26, column 59
    function action_dest_4 () : pcf.api.Destination {
      return pcf.VendorEvaluationPopup.createDestination(currentVendorEvaluation, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Evaluator_Cell) at VendorEvaluationsLV.pcf: line 31, column 54
    function action_dest_9 () : pcf.api.Destination {
      return pcf.VendorEvaluationPopup.createDestination(currentVendorEvaluation, CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on DateCell (id=EvaluationDate_Cell) at VendorEvaluationsLV.pcf: line 26, column 59
    function valueRoot_6 () : java.lang.Object {
      return currentVendorEvaluation
    }
    
    // 'value' attribute on TextCell (id=Evaluator_Cell) at VendorEvaluationsLV.pcf: line 31, column 54
    function value_10 () : java.lang.String {
      return currentVendorEvaluation.Evaluator
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at VendorEvaluationsLV.pcf: line 38, column 28
    function value_15 () : int {
      return currentVendorEvaluation.TotalScore
    }
    
    // 'value' attribute on DateCell (id=EvaluationDate_Cell) at VendorEvaluationsLV.pcf: line 26, column 59
    function value_5 () : java.util.Date {
      return currentVendorEvaluation.EvaluationDate
    }
    
    property get currentVendorEvaluation () : VendorEvaluation {
      return getIteratedValue(1) as VendorEvaluation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VendorEvaluationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at VendorEvaluationsLV.pcf: line 20, column 38
    function pickLocation_18 () : void {
      VendorEvaluationPopup.push(true)
    }
    
    // 'value' attribute on DateCell (id=EvaluationDate_Cell) at VendorEvaluationsLV.pcf: line 26, column 59
    function sortValue_0 (currentVendorEvaluation :  VendorEvaluation) : java.lang.Object {
      return currentVendorEvaluation.EvaluationDate
    }
    
    // 'value' attribute on TextCell (id=Evaluator_Cell) at VendorEvaluationsLV.pcf: line 31, column 54
    function sortValue_1 (currentVendorEvaluation :  VendorEvaluation) : java.lang.Object {
      return currentVendorEvaluation.Evaluator
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at VendorEvaluationsLV.pcf: line 38, column 28
    function sortValue_2 (currentVendorEvaluation :  VendorEvaluation) : java.lang.Object {
      return currentVendorEvaluation.TotalScore
    }
    
    // 'toAdd' attribute on RowIterator at VendorEvaluationsLV.pcf: line 20, column 38
    function toAdd_19 (currentVendorEvaluation :  VendorEvaluation) : void {
      anABContact.addToVendorEvaluations( currentVendorEvaluation )
    }
    
    // 'toRemove' attribute on RowIterator at VendorEvaluationsLV.pcf: line 20, column 38
    function toRemove_20 (currentVendorEvaluation :  VendorEvaluation) : void {
      anABContact.removeFromVendorEvaluations( currentVendorEvaluation )
    }
    
    // 'value' attribute on RowIterator at VendorEvaluationsLV.pcf: line 20, column 38
    function value_21 () : VendorEvaluation[] {
      return anABContact.VendorEvaluations
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}