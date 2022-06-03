package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Address/ABContactAddressCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABContactAddressCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($anAddress :  Address, $anABContact :  ABContact) : void {
    __widgetOf(this, pcf.ABContactAddressCV, SECTION_WIDGET_CLASS).setVariables(false, {$anAddress, $anABContact})
  }
  
  function refreshVariables ($anAddress :  Address, $anABContact :  ABContact) : void {
    __widgetOf(this, pcf.ABContactAddressCV, SECTION_WIDGET_CLASS).setVariables(true, {$anAddress, $anABContact})
  }
  
  
}