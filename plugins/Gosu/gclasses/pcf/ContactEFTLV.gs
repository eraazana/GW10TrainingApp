package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ContactEFTLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactEFTLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactEFTLV, SECTION_WIDGET_CLASS).setVariables(false, {$Contact})
  }
  
  function refreshVariables ($Contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactEFTLV, SECTION_WIDGET_CLASS).setVariables(true, {$Contact})
  }
  
  
}