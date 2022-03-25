<?php require 'templates/header.tpl.php' ?>
<h3 class="title">Renseignez les champs pour vous incrire</h3>
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
    <button type="submit" class="btn btn-secondary" id="signupButton">Valider</button>
</form>
<?php require 'templates/footer.tpl.php' ?>