<?php require 'templates/header.tpl.php' ?>

<main class="text-center" class="px-3 mb-">
    <h1 class="title">Réservez en quelques clics !</h1>
    <p class="lead">Une fois inscrit, choisissez l'un de nos 7 emplacements, bénéfieciez d'une place par semaine et par foodtruck.</p>
    <p class="lead">
        <a href="reservations.php" class="btn btn-lg btn-secondary fw-bold border-white bg-white" id="reserveButton">Réserver</a>
    </p>
    <section class="reservation hidden">
        <h3 class="title">Vos réservations à venir</h3>
        <p>Vous n'avez pas encore effectué de réservations</p>
        <hr>
        <h3 class="title">Effectuez une nouvelle réservation</h3>
        <form>
            <div class="mb-3">
            <label class="mb-2" for="spot" class="form-label">Emplacement</label>
            <select class="form-select">
                <option selected>Choisissez un emplacement</option>
                <?php for ($i = 1; $i <= 7; $i++): ?>
                    <option value="1"><?= $i ?></option>
                <?php endfor ?>
            </select>
            </div>
            <div class="mb-3">
                <label class="mb-2" for="bookedDate" class="form-label">Date souhaitée</label>
                <input type="date" class="form-control" id="bookedDate">
            </div>
            <button type="submit" class="btn btn-secondary">Valider</button>
        </form>
    </section>
</main>

<?php require 'templates/footer.tpl.php' ?>


