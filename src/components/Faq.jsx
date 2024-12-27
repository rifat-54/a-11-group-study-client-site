import React from "react";

const Faq = () => {
  return (
    <div className="md:w-10/12 space-y-3 mx-auto mt-28">
        <h2 className="text-4xl font-bold text-center mb-20">FAQ</h2>
      <div className="collapse  collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        What is the purpose of this website?
        </div>
        <div className="collapse-content">
          <p>This platform is designed to connect students and learners for collaborative group studies, sharing resources, and improving their learning experience through teamwork</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How do I create or join a study group?
        </div>
        <div className="collapse-content">
          <p> Simply sign up, browse available study groups by subject or interest, and click “Join.” You can also create your own group by selecting the “Create Group” option and inviting others.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Is this platform free to use?
        </div>
        <div className="collapse-content">
          <p> Yes, the core features like creating and joining study groups are completely free. Additional premium features, if any, will be clearly labeled.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Is this platform free to use?
        </div>
        <div className="collapse-content">
          <p> Yes, the core features like creating and joining study groups are completely free. Additional premium features, if any, will be clearly labeled.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How do I create or join a study group?
        </div>
        <div className="collapse-content">
          <p> Simply sign up, browse available study groups by subject or interest, and click “Join.” You can also create your own group by selecting the “Create Group” option and inviting others.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Is this platform free to use?
        </div>
        <div className="collapse-content">
          <p> Yes, the core features like creating and joining study groups are completely free. Additional premium features, if any, will be clearly labeled.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Faq;
