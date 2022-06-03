package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/BasicAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class BasicAddressInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($anAddress :  Address) : void {
    __widgetOf(this, pcf.BasicAddressInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$anAddress})
  }
  
  function refreshVariables ($anAddress :  Address) : void {
    __widgetOf(this, pcf.BasicAddressInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$anAddress})
  }
  
  
}