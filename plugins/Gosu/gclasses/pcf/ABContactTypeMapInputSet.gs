package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactTypeMapInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABContactTypeMapInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($ABContact :  ABContact) : void {
    __widgetOf(this, pcf.ABContactTypeMapInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$ABContact})
  }
  
  function refreshVariables ($ABContact :  ABContact) : void {
    __widgetOf(this, pcf.ABContactTypeMapInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$ABContact})
  }
  
  
}