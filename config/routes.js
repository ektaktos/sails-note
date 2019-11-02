/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  'POST /api/v1/user': 'UserController.create',
  'POST /api/v1/signup': { action: 'auth/signup' },
  'POST /api/v1/login': { action: 'auth/login' },
  'POST /api/v1/addnote': { action: 'notes/add'},
  'GET /api/v1/getnotes': { action: 'notes/allnotes'},
  'GET /api/v1/note/:id': { action: 'notes/note'},
  'PUT /api/v1/note/u/:id': { action: 'notes/updatenote'},
  'DELETE /api/v1/note/d/:id': { action: 'notes/deletenote'}

};
