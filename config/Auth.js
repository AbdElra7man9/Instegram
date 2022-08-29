
  // export const ensureAuthenticated =(req, res, next) => {
  //   if (req.isAuthenticated()) {
  //     return next();
  //   }
  //   // req.flash('error_msg', 'Please log in to view that resource');
  //   res.redirect('/SignIn');
  // }

  // export const forwardAuthenticated = (req, res, next) => {
  //   if (!req.isAuthenticated()) {
  //     return next();
  //   }
  //   res.redirect('/');      
  // }
  // export const admin = (req,res,next) => {
  //   if (!req.user.isAdmin) {
  //     // req.flash('error', 'You have no premission to see this page')
  //     return res.redirect('/signin');
  //   }
  //   return next();   
  // }
