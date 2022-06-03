package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/LegalCase/LegalCaseLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LegalCaseLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($anABContact :  ABContact) : void {
    __widgetOf(this, pcf.LegalCaseLV, SECTION_WIDGET_CLASS).setVariables(false, {$anABContact})
  }
  
  function refreshVariables ($anABContact :  ABContact) : void {
    __widgetOf(this, pcf.LegalCaseLV, SECTION_WIDGET_CLASS).setVariables(true, {$anABContact})
  }
  
  
}