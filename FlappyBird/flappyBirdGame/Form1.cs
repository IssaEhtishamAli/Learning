namespace flappyBirdGame
{
    public partial class Form1 : Form
    {
        int pipespeed = 5;
        int gravity = 7;
        int score = 0;
        public Form1()
        {
            InitializeComponent();
        }
        private void Form1_Load(object sender, EventArgs e)
        {

        }
        private void GameTimerEvent(object sender, EventArgs e)
        {
            bird.Top += gravity;
            pipedown.Left -= pipespeed;
            pipeup.Left -= pipespeed;
            Score.Text = score.ToString();
            if(pipedown.Left < -150)
            {
                pipedown.Left = 800;
                score++;
            }  
            if(pipeup.Left < -100)
            {
                pipeup.Left = 950;
                score++;
            }
            if(bird.Bounds.IntersectsWith(pipedown.Bounds)||bird.Bounds.IntersectsWith(pipeup.Bounds) &&
                bird.Bounds.IntersectsWith(ground.Bounds))
            {
                endgame();
            }
        }
        private void gamekeydown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Space)
            {
                gravity = -7;
            }
        }
        private void endgame()
        {
            gametimer.Stop();
            Score.Text += " Game Over";
        }
        private void gamekeyup(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Space)
            {
                gravity = 7;
            }
        }
    }
}