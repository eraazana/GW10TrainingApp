package trainingapp.xmlmodels.bankaccountmodel.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement BankAccountEnhancement : trainingapp.xmlmodels.bankaccountmodel.BankAccount {
  public static function create(object : entity.BankAccount) : trainingapp.xmlmodels.bankaccountmodel.BankAccount {
    return new trainingapp.xmlmodels.bankaccountmodel.BankAccount(object)
  }

  public static function create(object : entity.BankAccount, options : gw.api.gx.GXOptions) : trainingapp.xmlmodels.bankaccountmodel.BankAccount {
    return new trainingapp.xmlmodels.bankaccountmodel.BankAccount(object, options)
  }

}