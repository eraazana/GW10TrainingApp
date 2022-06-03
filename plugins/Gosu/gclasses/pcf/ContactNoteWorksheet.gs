package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ContactNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactNoteWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (anABContact :  ABContact, aContactNote :  ContactNote, isNewNote :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ContactNoteWorksheet, {anABContact, aContactNote, isNewNote}, 1)
  }
  
  static function createDestination (anABContact :  ABContact, isNewNote :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ContactNoteWorksheet, {anABContact, isNewNote}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (anABContact :  ABContact, aContactNote :  ContactNote, isNewNote :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactNoteWorksheet, {anABContact, aContactNote, isNewNote}, 1).goInWorkspace()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (anABContact :  ABContact, isNewNote :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactNoteWorksheet, {anABContact, isNewNote}, 0).goInWorkspace()
  }
  
  static function push (anABContact :  ABContact, aContactNote :  ContactNote, isNewNote :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactNoteWorksheet, {anABContact, aContactNote, isNewNote}, 1).push()
  }
  
  static function push (anABContact :  ABContact, isNewNote :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactNoteWorksheet, {anABContact, isNewNote}, 0).push()
  }
  
  
}