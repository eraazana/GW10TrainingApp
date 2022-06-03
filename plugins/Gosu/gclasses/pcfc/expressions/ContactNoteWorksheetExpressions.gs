package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ContactNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactNoteWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ContactNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactNoteWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact, aContactNote :  ContactNote, isNewNote :  boolean) : int {
      return 1
    }
    
    static function __constructorIndex (anABContact :  ABContact, isNewNote :  boolean) : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ContactNoteWorksheet.pcf: line 51, column 43
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContactNote.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Body_Input) at ContactNoteWorksheet.pcf: line 57, column 40
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContactNote.Body = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=ContactNoteType_Input) at ContactNoteWorksheet.pcf: line 41, column 50
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContactNote.ContactNoteType = (__VALUE_TO_SET as typekey.ContactNoteType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Confidential_Input) at ContactNoteWorksheet.pcf: line 46, column 50
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContactNote.IsConfidential = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at ContactNoteWorksheet.pcf: line 24, column 27
    function initialValue_1 () : ContactNote {
      return anABContact.addContactNote()
    }
    
    // EditButtons at ContactNoteWorksheet.pcf: line 30, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'location' attribute on Scope at ContactNoteWorksheet.pcf: line 17, column 44
    function location_0 () : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABContact)
    }
    
    // 'tabLabel' attribute on Worksheet (id=ContactNoteWorksheet) at ContactNoteWorksheet.pcf: line 11, column 118
    function tabLabel_20 () : java.lang.String {
      return isNewNote ? DisplayKey.get("Training.NewNote") : DisplayKey.get("Training.EditNote")
    }
    
    // 'title' attribute on Worksheet (id=ContactNoteWorksheet) at ContactNoteWorksheet.pcf: line 11, column 118
    static function title_19 (aContactNote :  ContactNote, anABContact :  ABContact, isNewNote :  boolean) : java.lang.Object {
      return isNewNote ? DisplayKey.get("Training.NewNote") : DisplayKey.get("Training.EditNote")
    }
    
    // 'value' attribute on TypeKeyInput (id=ContactNoteType_Input) at ContactNoteWorksheet.pcf: line 41, column 50
    function valueRoot_5 () : java.lang.Object {
      return aContactNote
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at ContactNoteWorksheet.pcf: line 51, column 43
    function value_11 () : java.lang.String {
      return aContactNote.Subject
    }
    
    // 'value' attribute on TextAreaInput (id=Body_Input) at ContactNoteWorksheet.pcf: line 57, column 40
    function value_15 () : java.lang.String {
      return aContactNote.Body
    }
    
    // 'value' attribute on TypeKeyInput (id=ContactNoteType_Input) at ContactNoteWorksheet.pcf: line 41, column 50
    function value_3 () : typekey.ContactNoteType {
      return aContactNote.ContactNoteType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Confidential_Input) at ContactNoteWorksheet.pcf: line 46, column 50
    function value_7 () : java.lang.Boolean {
      return aContactNote.IsConfidential
    }
    
    override property get CurrentLocation () : pcf.ContactNoteWorksheet {
      return super.CurrentLocation as pcf.ContactNoteWorksheet
    }
    
    property get aContactNote () : ContactNote {
      return getVariableValue("aContactNote", 0) as ContactNote
    }
    
    property set aContactNote ($arg :  ContactNote) {
      setVariableValue("aContactNote", 0, $arg)
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    property get isNewNote () : boolean {
      return getVariableValue("isNewNote", 0) as java.lang.Boolean
    }
    
    property set isNewNote ($arg :  boolean) {
      setVariableValue("isNewNote", 0, $arg)
    }
    
    
  }
  
  
}