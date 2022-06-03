package trainingapp.messaging.bank.abcontactmodel.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement ABContactEnhancement : trainingapp.messaging.bank.abcontactmodel.ABContact {
  public static function create(object : entity.ABContact) : trainingapp.messaging.bank.abcontactmodel.ABContact {
    return new trainingapp.messaging.bank.abcontactmodel.ABContact(object)
  }

  public static function create(object : entity.ABContact, options : gw.api.gx.GXOptions) : trainingapp.messaging.bank.abcontactmodel.ABContact {
    return new trainingapp.messaging.bank.abcontactmodel.ABContact(object, options)
  }

}