package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABPerson/ABPersonSubtypeInfoInputSet.ABAttorney.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPersonSubtypeInfoInputSet_ABAttorney extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($anABContact :  ABContact) : void {
    __widgetOf(this, pcf.ABPersonSubtypeInfoInputSet_ABAttorney, SECTION_WIDGET_CLASS).setVariables(false, {$anABContact})
  }
  
  function refreshVariables ($anABContact :  ABContact) : void {
    __widgetOf(this, pcf.ABPersonSubtypeInfoInputSet_ABAttorney, SECTION_WIDGET_CLASS).setVariables(true, {$anABContact})
  }
  
  
}