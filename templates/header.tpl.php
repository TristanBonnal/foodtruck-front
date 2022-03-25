<!doctype html>
<html lang="en" class="h-100">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Foodtruck Resa</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/s/cover/">
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/cover.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  </head>

    <body class="d-flex h-100 text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
            <div>
            <h3 class="float-md-start mb-0 title"><i class="bi bi-truck"></i> Foodtruck Spots</h3>
            <nav class="nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link" aria-current="page" href="/">Accueil</a>
                <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#Modal">Connexion</a>
                <a class="nav-link reverse-colors" aria-current="page" href="register.php">Inscription</a>
                <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ModalLabel">Connexion</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                      <label class="mb-2" for="InputEmail1" class="form-label">Adresse email</label>
                                      <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp">
                                    </div>
                                    <div class="mb-3">
                                      <label class="mb-2" for="InputPassword1" class="form-label">Mot de passe</label>
                                      <input type="password" class="form-control" id="InputPassword1">
                                    </div>
                                    <p class="text-center">
                                        Pas encore inscrit ?<br>
                                        <a href="/"> Créez un compte ici</a>
                                    </p>
                                </form>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Annuler</button>
                            <button type="button" id="logginButton" class="btn btn-secondary" data-bs-dismiss="modal">Valider</button>
                        </div>
                    </div>
                    </div>
                </div> 
                
            </nav>
            </div>
        </header>