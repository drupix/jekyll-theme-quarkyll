---
title: Elements
layout: page
classes: title-center-title-h1h2
menus:
  help:
    title: Elements
    weight: 4
    identifier: elements
---

<div class="title-center title-h1h2">
    <h1>Elements</h1>
</div>

<div class="docs-content">
	<div class="container">
		<div class="columns">
			<div class="column col-4 col-md-12">
				<div id="progress">
					<h3>Progress Bars</h3>
					<div class="progress">
						<div class="bar" style="width: 60%;">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-info">
						<div class="bar" style="width: 20%">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-success">
						<div class="bar" style="width: 40%">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-warning">
						<div class="bar" style="width: 60%">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-danger">
						<div class="bar" style="width: 80%">
							&nbsp;
						</div>
					</div>
					<div class="progress">
						<div class="bar bar-success" style="width: 35%;">
							&nbsp;
						</div>
						<div class="bar bar-warning" style="width: 20%;">
							&nbsp;
						</div>
						<div class="bar bar-danger" style="width: 10%;">
							&nbsp;
						</div>
					</div>
					<p>You can stripe...</p>
					<div class="progress progress-striped">
						<div class="bar" style="width: 70%;">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-info progress-striped">
						<div class="bar" style="width: 20%;">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-success progress-striped">
						<div class="bar" style="width: 40%;">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-warning progress-striped">
						<div class="bar" style="width: 60%;">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-danger progress-striped">
						<div class="bar" style="width: 80%;">
							&nbsp;
						</div>
					</div>
					<p>...and activate them all!</p>
					<div class="progress progress-striped active">
						<div class="bar" style="width: 80%;">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-info progress-striped active">
						<div class="bar" style="width: 20%">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-success progress-striped active">
						<div class="bar" style="width: 40%">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-warning progress-striped active">
						<div class="bar" style="width: 60%">
							&nbsp;
						</div>
					</div>
					<div class="progress progress-danger progress-striped active">
						<div class="bar" style="width: 80%">
							&nbsp;
						</div>
					</div>
				</div>
			</div>
			<!-- /progress -->
			<div class="column col-8 col-md-12">
				<div id="labels">
					<h3>Labels</h3>
					<p>Labels are formatted text tags for highlighted, informative information.</p>
					<div class="margin-bottom">
						<!-- Labels -->
            <span class="label">Default </span> <span class="label label-primary">Primary </span> <span class="label label-secondary">Secondary </span> <span class="label label-success">Success </span> <span class="label label-warning">Warning </span> <span class="label label-error">Error </span> <span class="label label-important">Important </span> <span class="label label-info">Info </span> <span class="label label-inverse">Inverse </span>
					</div>
					<div class="docs-note">
						<p>Add the <code>label</code> class to &lt;span&gt; or &lt;small&gt; elements. You can add another class <code>label-primary</code>, <code>label-secondary</code>, <code>label-success</code>, <code>label-warning</code> and <code>label-error</code> for colored labels.</p>
					</div>

					<div class="margin-bottom">
						<!-- Rounded Labels --><span class="label label-rounded">Default </span> <span class="label label-rounded label-primary">Primary </span> <span class="label label-rounded label-secondary">Secondary </span> <span class="label label-rounded label-success">Success </span> <span class="label label-rounded label-warning">Warning </span> <span class="label label-rounded label-error">Error </span> <span class="label label-rounded label-important">Important </span> <span class="label label-rounded label-info">Info </span> <span class="label label-rounded label-inverse">Inverse </span>
					</div>

					<div class="docs-note">
						<p>Add the <code>label-rounded</code> class to have rounded labels.</p>
					</div>

					<pre class="code" data-lang="HTML">
<code>&lt;<span class="tag">span</span> <span class="atn">class</span>=<span class="atv">"label"</span>&gt;default label&lt;<span class="tag">/span</span>&gt;
&lt;<span class="tag">span</span> <span class="atn">class</span>=<span class="atv">"label label-primary"</span>&gt;primary label&lt;<span class="tag">/span</span>&gt;
&lt;<span class="tag">span</span> <span class="atn">class</span>=<span class="atv">"label label-primary label-rounded"</span>&gt;label rounded&lt;<span class="tag">/span</span>&gt;
</code></pre>
				</div>

<div class="hl-code">
{% highlight html %}
<span class="label">default label</span>
<span class="label label-primary">primary label</span>
<span class="label label-primary label-rounded">label rounded</span>
{% endhighlight %}
</div>

				<div id="badges">
					<h3>Badges</h3>

					<div class="docs-note">
						<p>Badges are often used as unread number indicators.</p>
					</div>

					<div class="margin-bottom">
						<!-- Badges --><span class="badge" data-badge="1">Notification</span> <span class="badge badge-success" data-badge="2">Success</span> <span class="badge badge-warning" data-badge="2">Warning</span> <span class="badge badge-error" data-badge="3">Error</span> <span class="badge badge-important" data-badge="6">Important</span> <span class="badge badge-info" data-badge="8">Info</span> <span class="badge badge-inverse" data-badge="10">Inverse</span>
					</div>
				</div>
				<!-- /badges -->
			</div>
			<!-- /column -->
		</div>
		<!-- /columns -->
	</div>
	<!-- /container -->

	<div class="container">
		<div class="columns">
			<div class="column col-7 col-md-12">
				<div id="alerts">
					<h3>Alerts</h3>

					<div class="alert">
						<button class="close" data-dismiss="alert" type="button">x</button><strong>Beware!</strong> Aliens are among us and they will find you.
					</div>

					<div class="alert alert-error">
						<button class="close" data-dismiss="alert" type="button">x</button><strong>They are coming!</strong> You can run, but you can't hide.
					</div>

					<div class="alert alert-success">
						<button class="close" data-dismiss="alert" type="button">x</button><strong>Well done!</strong> You successfully killed an Alien.
					</div>

					<div class="alert alert-info">
						<button class="close" data-dismiss="alert" type="button">x</button><strong>Very good!</strong> But remember, they will come back.
					</div>
				</div>
			</div>
			<!-- /alerts -->

			<div class="column col-5 col-md-12">
				<div id="wells">
					<h3>Well</h3>

					<div class="well well-small">
						I'm in a well!
					</div>

					<div class="well">
						And I'm in a larger well!
					</div>

					<div class="well well-large">
						And I'm in the largest well!
					</div>
				</div>
			</div>
			<!-- /well -->
		</div>
	</div>

	<div class="container">
		<div class="columns">
			<div class="column col-5 col-md-12">
				<!-- Modals -->
				<div id="modals">
					<h3>Modals</h3>

					<div class="docs-note">
						<p>Modals are flexible dialog prompts.</p>
					</div>
					<a class="btn btn-primary" href="#example-modal-1">Open Modal</a>

					<div class="modal" id="example-modal-1">
						<a aria-label="Close" class="modal-overlay" href="#modals">&nbsp;</a>

						<div class="modal-container" role="document">
							<div class="modal-header">
								<div class="modal-title h5">
									Modal title
								</div>
							</div>

							<div class="modal-body">
								<div class="content">
									<p>This is the content inside the modal.</p>

									<h4>Lorem ipsum</h4>

									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>

									<p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>

									<h4>Cupcake ipsum</h4>

									<p>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.</p>

									<p>De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve.</p>

									<h4>Candy ipsum</h4>

									<p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>

									<p>Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and cheese danish fontina smelly cheese who moved my cheese cow.</p>
								</div>
							</div>

							<div class="modal-footer">
								<button class="btn btn-primary">Share</button><a class="btn btn-link" href="#modals">Close</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Modals -->

			<div class="column col-7 col-md-12">
				<div id="tooltips">
					<h3>Tooltips</h3>

					<div class="docs-note">
						<p>Tooltips provide context information labels that appear on hover and focus.</p>
					</div>

					<div class="columns text-center">
						<div class="column col-3 col-md-6">
							<button class="btn btn-primary tooltip" data-tooltip="Top Tooltip Text">top tooltip</button>
						</div>

						<div class="column col-3 col-md-6">
							<button class="btn btn-primary tooltip tooltip-right" data-tooltip="Right Tooltip Text">right tooltip</button>
						</div>

						<div class="column col-3 col-md-6">
							<button class="btn btn-primary tooltip tooltip-bottom" data-tooltip="Bottom Tooltip Text">bottom tooltip</button>
						</div>

						<div class="column col-3 col-md-6">
							<button class="btn btn-primary tooltip tooltip-left" data-tooltip="Left Tooltip Text">left tooltip</button>
						</div>
					</div>
				</div>
				<!-- /tooltips -->
			</div>
		</div>
		<!-- /columns -->
	</div>
	<!-- /container -->

	<div class="container">
		<div id="popovers">
			<h3>Popovers</h3>

			<div class="docs-note">
				<p>Popovers are small overlay content containers. Popovers component is built entirely in CSS.</p>
			</div>

			<div class="columns">
				<div class="column col-3 col-md-6 col-sm-6">
					<div class="popover">
						<a class="btn btn-primary" href="#popovers">top popover </a>

						<div class="popover-container">
							<div class="card">
								<div class="card-header">
									<div class="card-title h5">
										Apple
									</div>

									<div class="card-subtitle text-gray">
										Software and hardware
									</div>
								</div>

								<div class="card-body">
									To make a contribution to the world by making tools for the mind that advance humankind.
								</div>

								<div class="card-footer">
									<button class="btn btn-primary">Buy</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="column col-3 col-md-6 col-sm-6">
					<div class="popover popover-right">
						<a class="btn btn-primary" href="#popovers">right popover </a>

						<div class="popover-container">
							<div class="card">
								<div class="card-header">
									<div class="card-title h5">
										Apple
									</div>

									<div class="card-subtitle text-gray">
										Software and hardware
									</div>
								</div>

								<div class="card-body">
									To make a contribution to the world by making tools for the mind that advance humankind.
								</div>

								<div class="card-footer">
									<button class="btn btn-primary">Buy</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="column col-3 col-md-6 col-sm-6">
					<div class="popover popover-bottom">
						<a class="btn btn-primary" href="#popovers">bottom popover </a>

						<div class="popover-container">
							<div class="card">
								<div class="card-header">
									<div class="card-title h5">
										Apple
									</div>

									<div class="card-subtitle text-gray">
										Software and hardware
									</div>
								</div>

								<div class="card-body">
									To make a contribution to the world by making tools for the mind that advance humankind.
								</div>

								<div class="card-footer">
									<button class="btn btn-primary">Buy</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="column col-3 col-md-6 col-sm-6">
					<div class="popover popover-left">
						<a class="btn btn-primary" href="#popovers">left popover </a>

						<div class="popover-container">
							<div class="card">
								<div class="card-header">
									<div class="card-title h5">
										Apple
									</div>

									<div class="card-subtitle text-gray">
										Software and hardware
									</div>
								</div>

								<div class="card-body">
									To make a contribution to the world by making tools for the mind that advance humankind.
								</div>

								<div class="card-footer">
									<button class="btn btn-primary">Buy</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /popover -->
	</div>
	<!-- /container -->

	<div class="container">
		<h3>Buttons</h3>

		<p>The theme brings different types of buttons ready to use for different purposes.</p>

		<p><button class="btn" type="button">Basic button</button>&nbsp;&nbsp;<button class="btn btn-primary" type="button">Primary button</button>&nbsp;<button class="btn btn-light" type="button">Light button</button>&nbsp;&nbsp;<button class="btn btn-info" type="button">Info button</button><br />
		<br />
		<button class="btn btn-success" type="button">Success button</button>&nbsp;&nbsp;<button class="btn btn-warning" type="button">Warning button</button>&nbsp;&nbsp;<button class="btn btn-danger" type="button">Danger button</button>&nbsp;&nbsp;<button class="btn btn-inverse" type="button">Inverse button</button></p>

		<p>You can toggle them all...</p>

		<p><button class="btn" data-toggle="button" type="button">Basic button</button>&nbsp;&nbsp;<button class="btn btn-primary" data-toggle="button" type="button">Primary button</button>&nbsp;&nbsp;<button class="btn btn-light" data-toggle="button" type="button">Light button</button>&nbsp;&nbsp;<button class="btn btn-info" data-toggle="button" type="button">Info button</button><br />
		<br />
		<button class="btn btn-success" data-toggle="button" type="button">Success button</button>&nbsp;&nbsp;<button class="btn btn-warning" data-toggle="button" type="button">Warning button</button>&nbsp;&nbsp;<button class="btn btn-danger" data-toggle="button" type="button">Danger button</button>&nbsp;&nbsp;<button class="btn btn-inverse" data-toggle="button" type="button">Inverse button</button></p>

		<p>...and let them loading.</p>

		<p><button class="btn btn-loading" data-loading-text="loading..." type="button">Basic button</button>&nbsp;&nbsp;<button class="btn btn-primary btn-loading" data-loading-text="loading..." type="button">Primary button</button>&nbsp;&nbsp;<button class="btn btn-light btn-loading" data-loading-text="loading..." type="button">Light button</button>&nbsp;&nbsp;<button class="btn btn-info btn-loading" data-loading-text="loading..." type="button">Info button</button><br />
		<br />
		<button class="btn btn-success btn-loading" data-loading-text="loading..." type="button">Success button</button>&nbsp;&nbsp;<button class="btn btn-warning btn-loading" data-loading-text="loading..." type="button">Warning button</button>&nbsp;&nbsp;<button class="btn btn-danger btn-loading" data-loading-text="loading..." type="button">Danger button</button>&nbsp;&nbsp;<button class="btn btn-inverse btn-loading" data-loading-text="loading..." type="button">Inverse button</button></p>
	</div>
	<!-- /container --><!-- /row-fluid -->

	<div class="container">
		<div class="columns">
			<div class="column col-6 col-md-12">
				<p>All buttons are available in block styles...</p>

				<div class="well">
					<button class="btn btn-large btn-block btn-primary" type="button">Block level button</button><button class="btn btn-large btn-block" type="button">Block level button</button>
				</div>
			</div>
			<!-- /column -->

			<div class="column col-6 col-md-12">
				<p>...and different sizes</p>

				<p><button class="btn btn-primary btn-lg" type="button">Large button</button></p>

				<p><button class="btn btn-primary" type="button">Default button</button></p>

				<p><button class="btn btn-primary btn-sm" type="button">Small button</button></p>
			</div>
		</div>
		<!-- /columns -->
	</div>
	<!-- /container -->
</div>
<!-- /docs-content -->