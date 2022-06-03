package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABContactDetailScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact, $canPick :  Boolean) : void {
    __widgetOf(this, pcf.ABContactDetailScreen, SECTION_WIDGET_CLASS).setVariables(false, {$contact, $canPick})
  }
  
  function refreshVariables ($contact :  ABContact, $canPick :  Boolean) : void {
    __widgetOf(this, pcf.ABContactDetailScreen, SECTION_WIDGET_CLASS).setVariables(true, {$contact, $canPick})
  }
  
  
}