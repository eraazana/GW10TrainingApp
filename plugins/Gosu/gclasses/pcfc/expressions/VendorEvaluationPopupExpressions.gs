package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VendorEvaluationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VendorEvaluationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (shouldStartInEditMode :  Boolean) : int {
      return 1
    }
    
    static function __constructorIndex (aVendorEvaluation :  VendorEvaluation, shouldStartInEditMode :  Boolean) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=VendorEvaluationPopup) at VendorEvaluationPopup.pcf: line 15, column 67
    function beforeCommit_5 (pickedValue :  VendorEvaluation) : void {
      aVendorEvaluation.Status=typekey.VendorEvaluationStatus.TC_UNVERIFIED
    }
    
    // 'def' attribute on PanelRef at VendorEvaluationPopup.pcf: line 33, column 54
    function def_onEnter_3 (def :  pcf.VendorEvaluationDV) : void {
      def.onEnter(aVendorEvaluation)
    }
    
    // 'def' attribute on PanelRef at VendorEvaluationPopup.pcf: line 33, column 54
    function def_refreshVariables_4 (def :  pcf.VendorEvaluationDV) : void {
      def.refreshVariables(aVendorEvaluation)
    }
    
    // 'initialValue' attribute on Variable at VendorEvaluationPopup.pcf: line 23, column 32
    function initialValue_0 () : VendorEvaluation {
      return new VendorEvaluation()
    }
    
    // EditButtons at VendorEvaluationPopup.pcf: line 30, column 42
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at VendorEvaluationPopup.pcf: line 30, column 42
    function pickValue_1 () : VendorEvaluation {
      return aVendorEvaluation
    }
    
    // 'startInEditMode' attribute on Popup (id=VendorEvaluationPopup) at VendorEvaluationPopup.pcf: line 15, column 67
    function startInEditMode_6 () : java.lang.Boolean {
      return shouldStartInEditMode
    }
    
    override property get CurrentLocation () : pcf.VendorEvaluationPopup {
      return super.CurrentLocation as pcf.VendorEvaluationPopup
    }
    
    property get aVendorEvaluation () : VendorEvaluation {
      return getVariableValue("aVendorEvaluation", 0) as VendorEvaluation
    }
    
    property set aVendorEvaluation ($arg :  VendorEvaluation) {
      setVariableValue("aVendorEvaluation", 0, $arg)
    }
    
    property get shouldStartInEditMode () : Boolean {
      return getVariableValue("shouldStartInEditMode", 0) as Boolean
    }
    
    property set shouldStartInEditMode ($arg :  Boolean) {
      setVariableValue("shouldStartInEditMode", 0, $arg)
    }
    
    
  }
  
  
}