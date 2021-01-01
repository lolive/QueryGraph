﻿
if (typeof QueryGraph.Config == 'undefined') {
  QueryGraph.Config = {};
}

/**
 * Class for menage config
 */
QueryGraph.Config.Config = class Config 
{
  /*
   * @property {String}           homePage            The home page url (open with clic in home icon)
   * @property {String}           endPoint            The SPARQL EndPoint adresse
   * @property {String}           typeUri             URI of the type 
   * @property {String}           subclassUri         URI of the subclass 
   * @property {Boolean}          displayLabel        True if label is display
   * @property {String}           queryLanguage       Language of the request (for labels)
   * @property {Number}           limit               Limit of result (null for no limit)
   * @property {Object}           wikidataSearch      Wikidata search options
   * @property {Object}           nodeTypes           List of possible node type
   * @property {Object}           prefix              The prefix of triplestore
   * @property {Object}           lang                The QueryGraph language defaultLanguage
   * @property {Object}           selectLang          The language selector (icon)
   * @property {Object}           infos               The infos with contact and help urls
   * @property {Object}           nodeTypes           List of possible node data
   */
  static homePage;
  static endPoint;
  static typeUri;
  static displayLabel;
  static queryLanguage;
  static limit;
  static wikidataSearch;
  static nodeTypes;
  static prefix;
  static subclassUri;
  static lang;
  static selectLang;
  static infos;
  static nodeData;


  constructor() 
  {

  }

  /**
   * Set QueryGraph language
   * @param {String}       lang       The file name
   */
  static setLang(lang)
  {
    QueryGraph.Config.Config.lang = lang;
  }

  /**
   * Load config informations
   * @param {String}       fileName       The file name
   * @param {function}     callback       The callback
   */
  static load(fileName, callback)
  {
    let jqxhr = $.getJSON(fileName, null)
    .done(function(content)
    {
      QueryGraph.Config.Config.homePage = content.homePage;
      QueryGraph.Config.Config.endPoint = content.endPoint;
      QueryGraph.Config.Config.typeUri = content.typeUri;
      QueryGraph.Config.Config.displayLabel = content.displayLabel;
      QueryGraph.Config.Config.queryLanguage = content.queryLanguage;
      QueryGraph.Config.Config.limit = content.limit;
      QueryGraph.Config.Config.wikidataSearch = content.wikidataSearch;
      QueryGraph.Config.Config.nodeTypes = content.nodeTypes;
      QueryGraph.Config.Config.prefix = content.prefix;
      QueryGraph.Config.Config.subclassUri = content.subclassUri;
      QueryGraph.Config.Config.defaultLanguage = content.defaultLanguage;
      QueryGraph.Config.Config.selectLang = content.selectLang;
      QueryGraph.Config.Config.infos = content.infos;
      QueryGraph.Config.Config.nodeData = content.nodeData;

      if(QueryGraph.Config.Config.lang == null)
      {
        QueryGraph.Config.Config.lang = content.defaultLanguage;
      }

      callback();
    })
    .fail(function(d, textStatus, error)
    {
      console.error("getJSON failed, status: " + textStatus + ", error: "+error);
    })
    .always(function()
    {

    });
  }

  /**
   * Get the request language
   * @return {String}                  The language
   */
  static getQueryLanguage()
  {
    return QueryGraph.Config.Config.queryLanguage[QueryGraph.Config.Config.lang];
  }

  /**
   * Get the search language
   * @return {String}                  The language
   */
  static getSearchLanguage()
  {
    return QueryGraph.Config.Config.wikidataSearch.language[QueryGraph.Config.Config.lang];
  }

  /**
   * Get the Node predefined types
   * @return {String}                  The language
   */
  static getNodeTypes()
  {
    return QueryGraph.Config.Config.nodeTypes[QueryGraph.Config.Config.lang];
  }

  /**
   * Get the Node predefined data
   * @return {String}                  The language
   */
  static getNodePredefinedDatas()
  {
    return QueryGraph.Config.Config.nodeData[QueryGraph.Config.Config.lang];
  }

  /**
   * Get the Url of the contact page
   * @return {String}                  The url of contact page
   */
  static getContactPageUrl()
  {
    return QueryGraph.Config.Config.infos.baseContactUrl + QueryGraph.Config.Config.lang + QueryGraph.Config.Config.infos.baseContactExtension;
  }

  /**
   * Get the Url of the help page
   * @return {String}                  The url of help page
   */
  static getHelpPageUrl()
  {
    return QueryGraph.Config.Config.infos.baseHelpUrl + QueryGraph.Config.Config.lang + QueryGraph.Config.Config.infos.baseHelpExtension;
  }
}