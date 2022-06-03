package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ContactInsightsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactInsightsInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ContactInsightsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactInsightsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=isUpdateScore_Input) at ContactInsightsInputSet.pcf: line 24, column 40
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.UpdateScore = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=ContactGeneralNotes_Input) at ContactInsightsInputSet.pcf: line 31, column 34
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.Score = (__VALUE_TO_SET as int)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=isUpdateScore_Input) at ContactInsightsInputSet.pcf: line 24, column 40
    function editable_9 () : java.lang.Boolean {
      return (anABContact typeis ABPerson)
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function valueRange_4 () : java.lang.Object {
      return showRange()
    }
    
    // 'value' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function valueRoot_3 () : java.lang.Object {
      return anABContact
    }
    
    // 'value' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function value_1 () : int {
      return anABContact.Score
    }
    
    // 'value' attribute on BooleanRadioInput (id=isUpdateScore_Input) at ContactInsightsInputSet.pcf: line 24, column 40
    function value_10 () : java.lang.Boolean {
      return anABContact.UpdateScore
    }
    
    // 'value' attribute on TextAreaInput (id=ContactGeneralNotes_Input) at ContactInsightsInputSet.pcf: line 31, column 34
    function value_15 () : java.lang.String {
      return anABContact.Notes
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function verifyValueRangeIsAllowedType_5 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function verifyValueRangeIsAllowedType_5 ($$arg :  int[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function verifyValueRange_6 () : void {
      var __valueRangeArg = showRange()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=ContactKeyword_Input) at ContactInsightsInputSet.pcf: line 19, column 24
    function visible_0 () : java.lang.Boolean {
      return !(anABContact typeis ABPlace)
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    function showRange() : int[] {
      var insightScoreValues : int[] = {0,10,20,30,40,50,60,70,80,90,100}
      return insightScoreValues
    }
    
    
  }
  
  
}