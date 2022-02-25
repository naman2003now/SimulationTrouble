import pygame
import random

pygame.init()

display_width = 800
display_height = 600
bird_size = 60
pillar_width = 60
pillar_gap = 200

clock = pygame.time.Clock()

gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption("Flappy Bird 1.0.0")

red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 225)
black = (0, 0, 0)
bgcolor = (255, 255, 200)

'''
gameIcon = pygame.image.load() #yet to be added
pygame.display.set_icon(gameIcon)
'''

bird = pygame.image.load(r'resources\bird.png')
bird = pygame.transform.scale(bird, (60, 40))
velocity = 0
smallText = pygame.font.Font('freesansbold.ttf', 15)
mediumText = pygame.font.Font('freesansbold.ttf', 55)
largeText = pygame.font.Font('freesansbold.ttf', 105)


def fly(x, y, color=blue):
    global velocity

    gameDisplay.blit(pygame.transform.rotate(bird, -velocity/20), (x, y))
    # pygame.draw.rect(gameDisplay,color,[x,y,bird_size,bird_size])


def scr(score):
    text = smallText.render("SCORE: "+str(score), True, black)
    gameDisplay.blit(text, (10, 10))


def wait_delay(timeToWait):
    waitTime = 0
    while True:
        clock.tick(60)
        waitTime += 1/60
        if waitTime > timeToWait:
            break
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()


def start():
    print('game starts here')
    gameDisplay.fill(bgcolor)
    text = mediumText.render("FLAPPY BIRD", True, black)
    text2 = smallText.render('by SHUBHI PAUL', True, black)
    text3 = smallText.render("W / SPACEBAR OR UP ARROW TO JUMP", True, red)
    text4 = smallText.render("P TO PAUSE / RESUME", True, red)
    gameDisplay.blit(text, (200, 250))
    gameDisplay.blit(text2, (450, 310))
    gameDisplay.blit(text3, (200, 350))
    gameDisplay.blit(text4, (200, 380))
    pygame.display.update()
    wait_delay(5)


def paused(pause):
    while pause:
        text = largeText.render("PAUSED", True, red)
        gameDisplay.blit(text, (200, 250))
        pygame.display.update()
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_p:
                    pause = False
    return 0


def pillar_generator():
    upper_pillar = 200 + random.randint(-170, 170)
    lower_pillar = upper_pillar + pillar_gap
    return upper_pillar, lower_pillar


def pillar_disp(pillars, x=200):
    j = 0
    for i in pillars:
        pygame.draw.rect(gameDisplay, green, [x+j*310, 0, pillar_width, i[0]])
        pygame.draw.rect(gameDisplay, green, [
                         x+j*310, i[1], pillar_width, display_height - i[1]])
        j += 1


def gameLoop():
    start()
    global upper_pillar, lower_pillar, pause, velocity
    pillars = []

    reduce = 0
    frameRate = 60
    score = 0
    dodged = 0
    bird_position_x = 200
    bird_position_y = 200
    velocity = 0
    jumpVelocity = -250
    gravity = 1000
    pillar_position_x = display_width
    pillar_velocity = -100
    pillar_count = 1
    collide = 0
    pause = 0
    gameExit = False
    while not gameExit:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE or event.key == pygame.K_w or event.key == pygame.K_UP:
                    velocity = jumpVelocity
                if event.key == pygame.K_p:
                    print("we pause")
                    pause = 1
                    pause = paused(pause)

        gameDisplay.fill(bgcolor)

        if len(pillars) < 3:
            upper_pillar, lower_pillar = pillar_generator()
            pillars.append([upper_pillar, lower_pillar])

        # bird auto fall
        if bird_position_y >= -20 and bird_position_y <= display_height - bird_size:
            bird_position_y += velocity*(1/frameRate)
            velocity += gravity*(1/frameRate)

        # pillar velocity increase
        pillar_velocity -= dodged/frameRate
        # reduce 1 point on touching top
        if 0 > bird_position_y:
            bird_position_y = 0
            pygame.draw.rect(gameDisplay, red, [0, 0, display_width, 3])
            if score > 0 and reduce == 0:
                score -= 1
                dodged += 1
            reduce = 1
        else:
            reduce = 0

        # removing 1st pillarr when it reaches end
        if pillar_position_x < -50:
            pillars.pop(0)
            pillar_position_x += 310*pillar_count

        # scoring
        if bird_position_x > pillar_position_x:
            if increase == 0:
                score += 1
                dodged += 1
            increase = 1
        else:
            increase = 0

        pillar_position_x += (pillar_velocity - 4*dodged) * (1/frameRate)
        pillar_disp(pillars, pillar_position_x)
        scr(score)
        fly(bird_position_x, bird_position_y)

        # touch bottom
        if bird_position_y > 540 or collide == 1:
            text = largeText.render("GAME OVER", True, black)
            fly(bird_position_x, bird_position_y, red)
            gameDisplay.blit(text, (70, 200))
            pygame.display.update()
            pygame.time.delay(3000)
            gameLoop()

        # collide
        if bird_position_x + bird_size >= pillar_position_x and bird_position_x <= pillar_position_x + pillar_width:
            if bird_position_y <= pillars[0][0] or bird_position_y + bird_size >= pillars[0][1]:
                collide = 1

        pygame.display.update()
        clock.tick(frameRate)


gameLoop()
