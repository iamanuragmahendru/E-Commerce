const protectRoutes = (req, res, next) => {
  if (!res.locals.isAuth) {
    return res.resdirect("/401");
  }

  if (req.path.startsWith("/admin") && !res.locals.isAdmin) {
    return res.redirect("/403");
  }

  next();
};

module.exports = protectRoutes;
