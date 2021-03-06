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
    <div class="container d-flex w-100 h-100 p-5 mx-auto flex-column">
        <header class="mb-auto">
            <div>
                <h3 class="text-center text-mb-start float-md-start mb-3 title"><i class="bi bi-truck"></i> Foodtruck Spots</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="nav-link" aria-current="page" href="/">Accueil</a>
                    <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#Modal" id="loginLink">Connexion</a>
                    <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#ModalConnexion" id="registerLink">Inscription</a>
                    <a class="nav-link hidden" aria-current="page" href="" id="logoutLink">Déconnexion</a>
                    <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="ModalLabel">Connexion</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form id="loginForm">
                                        <div class="mb-3">
                                        <label class="mb-2" for="loginEmail" class="form-label">Adresse email</label>
                                        <input type="email" class="form-control" id="loginEmail">
                                        </div>
                                        <div class="mb-3">
                                        <label class="mb-2" for="loginPassword" class="form-label">Mot de passe</label>
                                        <input type="password" class="form-control" id="loginPassword">
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" id="closeModal">Fermer</button>
                                    <button type="button" id="loginButton" class="btn btn-secondary">Valider</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="modal fade" id="ModalConnexion" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="ModalLabelConnexion">Inscription</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" id="modalBodySignup">
                                    <form action="">
                                        <div class="mb-3">
                                            <label class="mb-2" for="InputEmail1" class="form-label">Adresse email</label>
                                            <input type="email" class="form-control" id="signupEmail" >
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-2" for="lastname" class="form-label">Nom</label>
                                            <input type="text" class="form-control" id="signupLastname">
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-2" for="firstname" class="form-label">Prénom</label>
                                            <input type="text" class="form-control" id="signupFirstname">
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-2" for="text" class="form-label">Mot de passe</label>
                                            <input type="password" class="form-control" id="signupPassword">
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-2" for="foodtruckName" class="form-label">Nom de votre FoodTruck</label>
                                            <input type="text" class="form-control" id="signupFoodtruckName">
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" id="closeModal2">Fermer</button>
                                    <button type="submit" id="signupButton" class="btn btn-secondary">Valider</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </nav>
            </div>
        </header>