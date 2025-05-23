import React from "react";
import { FeauteDesc } from "../../../../components/FeauteDesc";
import { IdealUserItem } from "../../../../components/IdealUserItem";
import { Image } from "../../../../components/Image";
import { InterviewType } from "../../../../components/InterviewType";
import { JobDetails } from "../../../../components/JobDetails";
import { PageNav } from "../../../../components/PageNav";
import { ReviewStart } from "../../../../components/ReviewStart";
import { IconLeft6 } from "../../../../icons/IconLeft6";
import { IconLeft7 } from "../../../../icons/IconLeft7";
import { IconLeft9 } from "../../../../icons/IconLeft9";
import { MediaIconUnfilledArrowPathRounded } from "../../../../icons/MediaIconUnfilledArrowPathRounded";
import { MediaIconUnfilledDocumentText } from "../../../../icons/MediaIconUnfilledDocumentText";
import { MediaIconUnfilledUsers } from "../../../../icons/MediaIconUnfilledUsers";
import { Property1Default1 } from "../../../../icons/Property1Default1";
import { Property1Hovered } from "../../../../icons/Property1Hovered";
import { Property1Hovered2 } from "../../../../icons/Property1Hovered2";
import "./style.css";

export const Frame = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <div className="frame">
      <div className="div-2" id="how-it-works">
        <div className="frame-wrapper">
          <div className="div-3">
            <div className="button-2">
              <IconLeft6 className="icon-left" />
              <div className="label-2">How It Works</div>
            </div>

            <p className="text-wrapper-3">From Job Posting to Mock Interview</p>

            <p className="mocklyai-builds-your">
              MocklyAI builds your interview around the role you&#39;re
              targeting.
            </p>
          </div>
        </div>

        <div className="div-4">
          <JobDetails />
          <InterviewType />
          <ReviewStart />
        </div>
      </div>

      <div className="div-5" id="features">
        <div className="frame-wrapper">
          <div className="div-3">
            <div className="button-2">
              <IconLeft7 className="icon-left" />
              <div className="label-2">Features</div>
            </div>

            <p className="text-wrapper-3">Built to Feel Like the Real Thing</p>

            <p className="text-wrapper-4">
              MocklyAI doesn’t just quiz you — it simulates the real pressure,
              pace, and polish of top tech interviews.
            </p>
          </div>
        </div>

        <div className="div-6">
          <div className="div-7">
            <FeauteDesc
              className="feaute-desc-instance"
              desc="Powered by GPT and ElevenLabs, MocklyAI speaks, waits, and responds like a real Google or Meta engineer."
              heading="AI Interviewer That Feels Human"
            />
            <img className="line" alt="Line" src="/img/line-5.svg" />

            <FeauteDesc
              className="feaute-desc-instance"
              desc="Paste any job description and get an interview tailored to the role and company style."
              heading="Custom Plans from Job Descriptions"
              icon={<IconLeft9 className="icon-instance-node" />}
            />
            <img className="line" alt="Line" src="/img/line-5.svg" />

            <FeauteDesc
              className="feaute-desc-instance"
              desc="Train with behavioral, coding, and system design questions that match the tone and pacing of real interviews."
              heading="Real FAANG-Style Rounds"
              icon={
                <MediaIconUnfilledArrowPathRounded
                  className="icon-instance-node"
                  color="#2563EB"
                />
              }
            />
            <img className="line" alt="Line" src="/img/line-5.svg" />

            <FeauteDesc
              className="feaute-desc-instance"
              desc="After each session, get a full transcript and AI-powered feedback to help you improve fast."
              heading="Smart Feedback with Full Transcript"
              icon={
                <MediaIconUnfilledDocumentText
                  className="icon-instance-node"
                  color="#2563EB"
                />
              }
            />
          </div>

          <Image
            className="image-instance"
            maskGroup="/img/mask-group-14.png"
            property1="default"
          />
        </div>
      </div>

      <div className="div-8" id="who-its-for">
        <div className="frame-wrapper">
          <div className="div-3">
            <div className="button-2">
              <MediaIconUnfilledUsers className="icon-left" color="#2563EB" />
              <div className="label-2">Who It’s For</div>
            </div>

            <p className="text-wrapper-3">
              Built for Anyone Prepping for Tech Interviews
            </p>

            <p className="text-wrapper-5">
              Applying to Big Tech, bootcamps, or internships? MocklyAI boosts
              your confidence.
            </p>
          </div>
        </div>

        <div className="div-9">
          <IdealUserItem
            benefit="Get real interview practice and boost your confidence."
            className="ideal-user-item-instance"
            user="CS Students"
          />
          <IdealUserItem
            benefit="Prepare like it’s a Google or Meta interview."
            className="ideal-user-item-instance"
            user="Junior Developers"
          />
          <IdealUserItem
            benefit="Master coding and system design rounds with ease."
            className="ideal-user-item-instance"
            user="Bootcamp Graduates"
          />
          <IdealUserItem
            benefit="Practice privately with instant AI feedback."
            className="ideal-user-item-instance"
            user="Solo Learners"
          />
        </div>
      </div>

      <div className="div-11">
        <div className="div-12">
          <div className="div-13">
            <PageNav
              className="page-nav-instance"
              page="How It Works"
              onClick={() => scrollToSection("how-it-works")}
            />
            <PageNav
              className="page-nav-instance"
              page="Features"
              onClick={() => scrollToSection("features")}
            />
            <PageNav
              className="page-nav-instance"
              page="Who It&#39;s For"
              onClick={() => scrollToSection("who-its-for")}
            />
          </div>

          <div className="div-14">
            <div
              className="icon-instance-node-2"
              onClick={() => window.open('https://x.com/try_mocklyai', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <Property1Default1 color="#A2A8B8" />
          </div>
          </div>
        </div>

        <div className="div-15">
          <div className="text-wrapper-7">
            © 2025 MocklyAI, All rights reserved
          </div>

          <div className="mockly-AI">
            <img className="group" alt="Group" src="/img/group-64.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
