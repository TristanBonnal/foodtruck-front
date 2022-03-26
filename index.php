<?php require 'templates/header.tpl.php' ?>

<main class="text-center" class="px-3">
    <section id="introSection">
        <h1 class="title">Réservez en quelques clics !</h1>
        <p class="lead">Une fois inscrit, choisissez l'un de nos 7 emplacements, bénéfieciez d'une place par semaine et par foodtruck.</p>
        <p class="lead">
            <a href="reservations.php" class="btn btn-lg btn-secondary fw-bold border-white bg-white" id="reservationButton">Réserver</a>
        </p>
    </section>
    <section class="hidden" id="reservationSection">
        <h3 class="title">Vos réservations</h3>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Date réservation</th>
                    <th scope="col">Emplacement</th>
                    <th scope="col">Référence</th>
                </tr>
            </thead>
            <tbody id="reservationsRow">
            </tbody>
        </table>
        <h3 class="title mt-5">Effectuez une nouvelle réservation</h3>
        <form class="">
            <div class="mb-3">
            <label class="mb-2" for="spot" class="form-label">Emplacement</label>
            <select class="form-select" id="spot">
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
            <button type="submit" class="btn btn-secondary" id="addReservationButton">Valider</button>
        </form>
    </section>
</main>

<?php require 'templates/footer.tpl.php' ?>


