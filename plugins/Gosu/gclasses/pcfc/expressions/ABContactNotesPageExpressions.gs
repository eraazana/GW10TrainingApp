package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactNotesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactNotesPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactNotesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactNotesPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact) : int {
      return 0
    }
    
    // Page (id=ABContactNotesPage) at ABContactNotesPage.pcf: line 9, column 156
    static function parent_23 (anABContact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABContact)
    }
    
    // 'value' attribute on TextCell (id=ContactNoteName_Cell) at ABContactNotesPage.pcf: line 33, column 55
    function sortValue_0 (CurrentContactNote :  ContactNote) : java.lang.Object {
      return CurrentContactNote.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactNotesPage.pcf: line 39, column 52
    function sortValue_1 (CurrentContactNote :  ContactNote) : java.lang.Object {
      return CurrentContactNote.ContactNoteType
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ABContactNotesPage.pcf: line 44, column 51
    function sortValue_2 (CurrentContactNote :  ContactNote) : java.lang.Object {
      return CurrentContactNote.Subject
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at ABContactNotesPage.pcf: line 52, column 32
    function sortValue_3 (CurrentContactNote :  ContactNote) : java.lang.Object {
      return CurrentContactNote.CreateTime
    }
    
    // 'title' attribute on Page (id=ABContactNotesPage) at ABContactNotesPage.pcf: line 9, column 156
    static function title_24 (anABContact :  ABContact) : java.lang.Object {
      return User.util.getCurrentUser().UseHelperLabels ? DisplayKey.get("Training.NotesLVHelper") : DisplayKey.get("Training.NotesLV")
    }
    
    // 'value' attribute on RowIterator at ABContactNotesPage.pcf: line 27, column 37
    function value_22 () : ContactNote[] {
      return anABContact.ContactNotes
    }
    
    override property get CurrentLocation () : pcf.ABContactNotesPage {
      return super.CurrentLocation as pcf.ABContactNotesPage
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactNotesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABContactNotesPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ABContactNotesPage.pcf: line 44, column 51
    function action_12 () : void {
      ContactNoteWorksheet.goInWorkspace( CurrentContactNote.ABContact, CurrentContactNote, false)
    }
    
    // 'action' attribute on DateCell (id=CreateDate_Cell) at ABContactNotesPage.pcf: line 52, column 32
    function action_17 () : void {
      ContactNoteWorksheet.goInWorkspace( CurrentContactNote.ABContact, CurrentContactNote, false)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at ABContactNotesPage.pcf: line 39, column 52
    function action_7 () : void {
      ContactNoteWorksheet.goInWorkspace( CurrentContactNote.ABContact, CurrentContactNote, false)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ABContactNotesPage.pcf: line 44, column 51
    function action_dest_13 () : pcf.api.Destination {
      return pcf.ContactNoteWorksheet.createDestination( CurrentContactNote.ABContact, CurrentContactNote, false)
    }
    
    // 'action' attribute on DateCell (id=CreateDate_Cell) at ABContactNotesPage.pcf: line 52, column 32
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ContactNoteWorksheet.createDestination( CurrentContactNote.ABContact, CurrentContactNote, false)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at ABContactNotesPage.pcf: line 39, column 52
    function action_dest_8 () : pcf.api.Destination {
      return pcf.ContactNoteWorksheet.createDestination( CurrentContactNote.ABContact, CurrentContactNote, false)
    }
    
    // 'value' attribute on TextCell (id=ContactNoteName_Cell) at ABContactNotesPage.pcf: line 33, column 55
    function valueRoot_5 () : java.lang.Object {
      return CurrentContactNote
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ABContactNotesPage.pcf: line 44, column 51
    function value_14 () : java.lang.String {
      return CurrentContactNote.Subject
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at ABContactNotesPage.pcf: line 52, column 32
    function value_19 () : java.util.Date {
      return CurrentContactNote.CreateTime
    }
    
    // 'value' attribute on TextCell (id=ContactNoteName_Cell) at ABContactNotesPage.pcf: line 33, column 55
    function value_4 () : java.lang.String {
      return CurrentContactNote.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactNotesPage.pcf: line 39, column 52
    function value_9 () : typekey.ContactNoteType {
      return CurrentContactNote.ContactNoteType
    }
    
    property get CurrentContactNote () : ContactNote {
      return getIteratedValue(1) as ContactNote
    }
    
    
  }
  
  
}