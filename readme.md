[Play the Prototype Now!](https://ffs.mattyjacks.com/fantasyfightersim/)

# Fantasy Fighter Sim
An interactive RPG experience, Fantasy Fighter Sim is going to be a portfolio piece for Matt Jackson.

This is the start of something great.


# AI Content Creation:

We use [Stable Diffusion Web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) to generate our image assets.

<img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00001-1546343001-goblin%20with%20s___.png"  width="200"><img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00003-1253253067-castle%20backgr___.png"  width="200"><img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00007-2478843934-sword-antique.png"  width="200"><img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00006-2420947611-fantasy%20hp%20po___.png"  width="200"><img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00008-2478843932-sword-phallic.png"  width="200"><img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00009-2937418289-sword-ninja-dagger.png"  width="200"><img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00010-808460143-barbarian.png"  width="200">

Your character portrait is determined by the armor you are wearing.
<img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00004-711545305-knight%20wearing___.png"  width="200"><img src="https://github.com/mattyjacks/fantasyfightersim/blob/main/examples/images/00005-2739792428-elf%20knight%20wi___.png"  width="200">

We will use an Stable Diffusion to create pre-generated content. For character portraits and enemies, items, towns, and more.

We will use Microsoft Azure audio content creation tools to generate the voices. We will start with pre-generated content and eventually do real time audio processing, to incorporate custom character names and town names.

# General Programming

It will run on Javascript, forming a web application.

TO-DO: Architect the software. Find tutorials on Javascript and explain why each one is needed.

Google Sheets will be used to handle the static data, such as items, enemies, and so on.

TO-DO: Figure out how to structure the github repository.

# Combat Rules
The combat is turn based. CSS animations will be used. There is only a single enemy in each combat. Each turn you have a certain amount of action points, depending on level. You can flee by rolling a speed check vs your enemy. Heavier armor reduces your speed.
