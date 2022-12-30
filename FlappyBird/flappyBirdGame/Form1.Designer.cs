namespace flappyBirdGame
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.ground = new System.Windows.Forms.PictureBox();
            this.bird = new System.Windows.Forms.PictureBox();
            this.pipedown = new System.Windows.Forms.PictureBox();
            this.pipeup = new System.Windows.Forms.PictureBox();
            this.Score = new System.Windows.Forms.Label();
            this.gametimer = new System.Windows.Forms.Timer(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.ground)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.bird)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pipedown)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pipeup)).BeginInit();
            this.SuspendLayout();
            // 
            // ground
            // 
            this.ground.Image = global::flappyBirdGame.Properties.Resources.land_0;
            this.ground.Location = new System.Drawing.Point(-1, 406);
            this.ground.Name = "ground";
            this.ground.Size = new System.Drawing.Size(1159, 56);
            this.ground.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.ground.TabIndex = 0;
            this.ground.TabStop = false;
            // 
            // bird
            // 
            this.bird.Image = global::flappyBirdGame.Properties.Resources._229_2298921_transparent_sprite_clipart_flappy_bird_free_sprites_hd;
            this.bird.Location = new System.Drawing.Point(110, 131);
            this.bird.Name = "bird";
            this.bird.Size = new System.Drawing.Size(72, 62);
            this.bird.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.bird.TabIndex = 1;
            this.bird.TabStop = false;
            // 
            // pipedown
            // 
            this.pipedown.Image = global::flappyBirdGame.Properties.Resources.pipeUp;
            this.pipedown.Location = new System.Drawing.Point(265, 246);
            this.pipedown.Name = "pipedown";
            this.pipedown.Size = new System.Drawing.Size(301, 166);
            this.pipedown.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pipedown.TabIndex = 2;
            this.pipedown.TabStop = false;
            // 
            // pipeup
            // 
            this.pipeup.Image = global::flappyBirdGame.Properties.Resources.pipeDown;
            this.pipeup.Location = new System.Drawing.Point(487, -1);
            this.pipeup.Name = "pipeup";
            this.pipeup.Size = new System.Drawing.Size(246, 128);
            this.pipeup.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pipeup.TabIndex = 3;
            this.pipeup.TabStop = false;
            // 
            // Score
            // 
            this.Score.AutoSize = true;
            this.Score.Location = new System.Drawing.Point(25, 415);
            this.Score.Name = "Score";
            this.Score.Size = new System.Drawing.Size(50, 20);
            this.Score.TabIndex = 4;
            this.Score.Text = "label1";
            // 
            // gametimer
            // 
            this.gametimer.Enabled = true;
            this.gametimer.Interval = 50;
            this.gametimer.Tick += new System.EventHandler(this.GameTimerEvent);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1158, 462);
            this.Controls.Add(this.Score);
            this.Controls.Add(this.pipeup);
            this.Controls.Add(this.pipedown);
            this.Controls.Add(this.bird);
            this.Controls.Add(this.ground);
            this.Name = "Form1";
            this.Text = " ";
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.gamekeydown);
            this.KeyUp += new System.Windows.Forms.KeyEventHandler(this.gamekeyup);
            ((System.ComponentModel.ISupportInitialize)(this.ground)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.bird)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pipedown)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pipeup)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private PictureBox ground;
        private PictureBox bird;
        private PictureBox pipedown;
        private PictureBox pipeup;
        private Label Score;
        private System.Windows.Forms.Timer gametimer;
    }
}