package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VendorEvaluationDVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VendorEvaluationDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Evaluator_Input) at VendorEvaluationDV.pcf: line 17, column 46
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      aVendorEvaluation.Evaluator = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Score_Timeliness_Input) at VendorEvaluationDV.pcf: line 39, column 40
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      aVendorEvaluation.Score_Timeliness = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Score_Communication_Input) at VendorEvaluationDV.pcf: line 48, column 40
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      aVendorEvaluation.Score_Communication = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Score_QualityOfWork_Input) at VendorEvaluationDV.pcf: line 57, column 40
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      aVendorEvaluation.Score_QualityOfWork = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Score_Pricing_Input) at VendorEvaluationDV.pcf: line 66, column 40
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      aVendorEvaluation.Score_Pricing = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextAreaInput (id=EvaluatorComment_Input) at VendorEvaluationDV.pcf: line 83, column 53
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      aVendorEvaluation.EvaluatorComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EvaluationDate_Input) at VendorEvaluationDV.pcf: line 22, column 51
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      aVendorEvaluation.EvaluationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on Reflect at VendorEvaluationDV.pcf: line 76, column 81
    function reflectionValue_36 (TRIGGER_INDEX :  int, VALUE1 :  java.lang.Integer, VALUE2 :  java.lang.Integer, VALUE3 :  java.lang.Integer, VALUE4 :  java.lang.Integer) : java.lang.Object {
      return aVendorEvaluation.sumTotalScore(VALUE1,VALUE2,VALUE3,VALUE4)
    }
    
    // 'validationExpression' attribute on TextInput (id=Score_Timeliness_Input) at VendorEvaluationDV.pcf: line 39, column 40
    function validationExpression_12 () : java.lang.Object {
      return ((aVendorEvaluation.Score_Timeliness > 25) or (aVendorEvaluation.Score_Timeliness < 0)) ? DisplayKey.get("Training.ValidationEvalScore") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=Score_Communication_Input) at VendorEvaluationDV.pcf: line 48, column 40
    function validationExpression_18 () : java.lang.Object {
      return ((aVendorEvaluation.Score_Communication > 25) or (aVendorEvaluation.Score_Communication < 0)) ? DisplayKey.get("Training.ValidationEvalScore") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=Score_QualityOfWork_Input) at VendorEvaluationDV.pcf: line 57, column 40
    function validationExpression_24 () : java.lang.Object {
      return ((aVendorEvaluation.Score_QualityOfWork > 25) or (aVendorEvaluation.Score_QualityOfWork < 0)) ? DisplayKey.get("Training.ValidationEvalScore") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=Score_Pricing_Input) at VendorEvaluationDV.pcf: line 66, column 40
    function validationExpression_30 () : java.lang.Object {
      return ((aVendorEvaluation.Score_Pricing > 25) or (aVendorEvaluation.Score_Pricing < 0)) ? DisplayKey.get("Training.ValidationEvalScore") : null
    }
    
    // 'value' attribute on TextInput (id=Evaluator_Input) at VendorEvaluationDV.pcf: line 17, column 46
    function valueRoot_2 () : java.lang.Object {
      return aVendorEvaluation
    }
    
    // 'value' attribute on TextInput (id=Evaluator_Input) at VendorEvaluationDV.pcf: line 17, column 46
    function value_0 () : java.lang.String {
      return aVendorEvaluation.Evaluator
    }
    
    // 'value' attribute on TextInput (id=Score_Timeliness_Input) at VendorEvaluationDV.pcf: line 39, column 40
    function value_13 () : java.lang.Integer {
      return aVendorEvaluation.Score_Timeliness
    }
    
    // 'value' attribute on TextInput (id=Score_Communication_Input) at VendorEvaluationDV.pcf: line 48, column 40
    function value_19 () : java.lang.Integer {
      return aVendorEvaluation.Score_Communication
    }
    
    // 'value' attribute on TextInput (id=Score_QualityOfWork_Input) at VendorEvaluationDV.pcf: line 57, column 40
    function value_25 () : java.lang.Integer {
      return aVendorEvaluation.Score_QualityOfWork
    }
    
    // 'value' attribute on TextInput (id=Score_Pricing_Input) at VendorEvaluationDV.pcf: line 66, column 40
    function value_31 () : java.lang.Integer {
      return aVendorEvaluation.Score_Pricing
    }
    
    // 'value' attribute on TextInput (id=ScoreTotal_Input) at VendorEvaluationDV.pcf: line 73, column 25
    function value_38 () : int {
      return aVendorEvaluation.TotalScore
    }
    
    // 'value' attribute on DateInput (id=EvaluationDate_Input) at VendorEvaluationDV.pcf: line 22, column 51
    function value_4 () : java.util.Date {
      return aVendorEvaluation.EvaluationDate
    }
    
    // 'value' attribute on TextAreaInput (id=EvaluatorComment_Input) at VendorEvaluationDV.pcf: line 83, column 53
    function value_41 () : java.lang.String {
      return aVendorEvaluation.EvaluatorComment
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at VendorEvaluationDV.pcf: line 27, column 45
    function value_8 () : VendorEvaluationStatus {
      return aVendorEvaluation.Status
    }
    
    // 'valueType' attribute on TypeKeyInput (id=Status_Input) at VendorEvaluationDV.pcf: line 27, column 45
    function verifyValueType_11 () : void {
      var __valueTypeArg : VendorEvaluationStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get aVendorEvaluation () : VendorEvaluation {
      return getRequireValue("aVendorEvaluation", 0) as VendorEvaluation
    }
    
    property set aVendorEvaluation ($arg :  VendorEvaluation) {
      setRequireValue("aVendorEvaluation", 0, $arg)
    }
    
    
  }
  
  
}